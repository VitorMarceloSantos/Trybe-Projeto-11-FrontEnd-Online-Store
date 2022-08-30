import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';
import Checkout from './pages/Checkout';
import Footer from './Components/Footer';
import Finish from './Components/Finish';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      CartItemsList: [],
    };
  }

  componentDidMount = () => {
    if (JSON.parse(localStorage.getItem('CartItems')) !== null) {
      this.setState({
        CartItemsList: JSON.parse(localStorage.getItem('CartItems')),
      });
    }
  }

  clearItemsCart = () => {
    this.setState({ CartItemsList: [] }, () => {
      const { CartItemsList } = this.state;
      localStorage.setItem('CartItems', JSON.stringify(CartItemsList)); // salvando no LocalStorage
    });
  }

  cartItemsStateUpdate = () => {
    const recoveredObject = JSON.parse(localStorage.getItem('CartItems'));
    this.setState({ CartItemsList: recoveredObject });
  }

  handleClickAddCart= (product) => {
    const { price, title, thumbnail, id } = product;
    const obj = {
      price,
      title,
      thumbnail,
      quantidade: 1,
      id,
      availableQuantity: product.available_quantity,
    };
    this.setState((prevState) => ({
      CartItemsList: [...prevState.CartItemsList, obj],
    }), () => {
      const { CartItemsList } = this.state;
      localStorage.setItem('CartItems', JSON.stringify(CartItemsList)); // salvando no LocalStorage
    });
  }

  checkMaxAmountOfProduct = (id, amount) => {
    const { CartItemsList } = this.state;
    const product = CartItemsList.find((e) => e.id === id);

    if (amount < product.availableQuantity) {
      return amount + 1;
    }
    return amount;
  }

  handleClickAmoutCart = (value, id) => {
    const { CartItemsList } = this.state;
    if (value === 'remove') { // seleciona todos os arrays que tem o id diferente do produto que terá a quantidade alterada
      const objTemporario = CartItemsList.filter((product) => (
        product.id !== id
      ));
      return this.setState({ CartItemsList: objTemporario }, () => {
        localStorage.removeItem('CartItems');
        localStorage.setItem('CartItems', JSON.stringify(objTemporario)); // salvando no LocalStorage
      });
    }
    CartItemsList.forEach((product, index) => {
      if (product.quantidade >= 1) {
        let objTemporario = {};
        if (product.id === id) {
          objTemporario = CartItemsList[index];
          if (value === 'increase') { // adicionando a quantidade correta no produto
            const inNumber = Number(objTemporario.quantidade);
            objTemporario.quantidade = this.checkMaxAmountOfProduct(id, inNumber);
          } else if (product.quantidade > 1) { // só vai diminuir se for maior que 1
            objTemporario.quantidade = Number(objTemporario.quantidade) - 1;
          }
          CartItemsList[index] = objTemporario; // replace do objeto correto(atualizado a quantidade)
          const objCartItems = CartItemsList;
          this.setState({ CartItemsList: objCartItems }, () => { // atualizando o estado do elemento
            localStorage.removeItem('CartItems');
            localStorage.setItem('CartItems', JSON.stringify(objCartItems)); // salvando no LocalStorage
          });
        }
      }
    });
  }

  render() {
    const { CartItemsList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              handleClickAddCart={ this.handleClickAddCart }
              CartItemsList={ CartItemsList }
            />) }
          />
          <Route
            exact
            path="/Carrinho"
            render={ (props) => (<Carrinho
              { ...props }
              CartItemsList={ CartItemsList }
              handleClickAmoutCart={ this.handleClickAmoutCart }
              cartItemsStateUpdate={ this.cartItemsStateUpdate }
            />) }
          />
          <Route
            exact
            path="/Detalhes/:id"
            render={ (props) => (<Detalhes
              { ...props }
              handleClickAddCart={ this.handleClickAddCart }
              CartItemsList={ CartItemsList }
            />) }
          />
          <Route
            exact
            path="/Checkout"
            render={ (props) => (<Checkout
              { ...props }
              CartItemsList={ CartItemsList }
              clearItemsCart={ this.clearItemsCart }
            />) }
          />
          <Route
            exact
            path="/Finish"
            component={ Finish }
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
