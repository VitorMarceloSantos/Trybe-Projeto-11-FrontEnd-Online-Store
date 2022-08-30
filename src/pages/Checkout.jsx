/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import '../styles/Checkout.css';
import { Link } from 'react-router-dom';
import Finish from '../Components/Finish';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      CPF: '',
      CEP: '',
      Nome: '',
      Email: '',
      payment: '',
      Telefone: '',
      verify: false,
      finish: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,

    });
  }

  validacao=() => {
    const {
      CPF,
      CEP,
      Nome,
      Email,
      Telefone,
      payment,
    } = this.state;

    const string = [
      CPF,
      CEP,
      Nome,
      Email,
      Telefone,
      payment,
    ].some((input) => input === '');

    return this.setState({ verify: string }, () => {
      const { verify } = this.state;
      if (verify === false) {
        const { clearItemsCart } = this.props;
        const { history } = this.props;
        clearItemsCart();
        history.push('/');
      }
    });
  }

  finishCart=() => {
    this.setState({
      finish: true,
    });
  }

  reduceTitle = (title) => {
    const lengthTilte = 5;
    const arrayTemp = (title).split(' ');
    const arrayFinal = arrayTemp.reduce((acc, curr, index) => {
      if (index < lengthTilte) {
        return `${acc} ${curr}`;
      }
      return acc;
    }, '');
    return arrayFinal;
  }

  render() {
    const { verify, finish } = this.state;
    const { CartItemsList, clearItemsCart } = this.props;
    return (
      <div className="container-checkout-initial">
        {finish ? (<Finish
          CartItemsList={ CartItemsList }
          clearItemsCart={ clearItemsCart }
        />
        ) : (
          <div className="container-checkout">
            <h2 className="finalization">Finalização de Compra</h2>
            <form className="checkout-form">
              <div className="container-inputs-checkout">
                <div className="container-primary-information">
                  <label
                    htmlFor="Nome"
                    className="text-checkout"
                  >
                    Nome Completo:
                    <input
                      data-testid="checkout-fullname"
                      name="Nome"
                      onChange={ this.onInputChange }
                      type="text"
                    />
                  </label>
                  <label
                    htmlFor="Email"
                    className="text-checkout"
                  >
                    Email:
                    <input
                      data-testid="checkout-email"
                      name="Email"
                      onChange={ this.onInputChange }
                      type="text"
                    />
                  </label>
                  <label
                    htmlFor="CPF"
                    className="text-checkout"
                  >
                    CPF:
                    <input
                      data-testid="checkout-cpf"
                      name="CPF"
                      onChange={ this.onInputChange }
                      type="text"
                    />
                  </label>
                </div>
                <div className="second-information">
                  <label
                    htmlFor="Telefone"
                    className="text-checkout"
                  >
                    Telefone:
                    <input
                      data-testid="checkout-phone"
                      name="Telefone"
                      onChange={ this.onInputChange }
                      type="text"
                    />
                  </label>
                  <label
                    htmlFor="CEP"
                    className="text-checkout"
                  >
                    CEP:
                    <input
                      data-testid="checkout-cep"
                      name="CEP"
                      onChange={ this.onInputChange }
                      type="text"
                    />
                  </label>
                  <label
                    htmlFor="Endereco"
                    className="text-checkout"
                  >
                    Endereço:
                    <input
                      data-testid="checkout-address"
                      name="Endereco"
                      onChange={ this.onInputChange }
                      type="text"
                    />
                  </label>
                </div>
              </div>
              <div className="form-pgto">
                <p className="text-checkout">Forma de Pagamento:</p>
                <label
                  htmlFor="Boleto"
                >
                  <input
                    data-testid="ticket-payment"
                    name="payment"
                    onChange={ this.onInputChange }
                    type="radio"
                    value="Boleto"
                    id="Boleto"
                  />
                  Boleto
                </label>
                <label
                  htmlFor="Visa"
                >
                  <input
                    data-testid="visa-payment"
                    name="payment"
                    onChange={ this.onInputChange }
                    type="radio"
                    value="Visa"
                    id="Visa"
                  />
                  Visa
                </label>
                <label
                  htmlFor="MasterCard"
                >
                  <input
                    data-testid="master-payment"
                    name="payment"
                    onChange={ this.onInputChange }
                    type="radio"
                    value="MasterCard"
                    id="MasterCard"
                  />
                  MasterCard
                </label>
                <label
                  htmlFor="Elo"
                >
                  <input
                    data-testid="elo-payment"
                    name="payment"
                    onChange={ this.onInputChange }
                    type="radio"
                    value="Elo"
                    id="Elo"
                  />
                  Elo
                </label>
              </div>
              <div>
                <Link
                  to="/Carrinho"
                >
                  <button
                    type="button"
                  >
                    Voltar
                  </button>
                </Link>
                <button
                  data-testid="checkout-btn"
                  type="button"
                  onClick={ this.finishCart }
                >
                  Salvar
                </button>
              </div>
            </form>
            <section className="checkout-error-msg">
              {verify && <span data-testid="error-msg"> Campos inválidos </span>}
            </section>
            <section className="container-items-checkout">
              <p className="text-checkout">Resumo do Pedido</p>
              <ul className="checkout-items-ul">
                {CartItemsList.map((product, index) => (
                  <li key={ index } className="items">
                    {/* <img src={ product.thumbnail } alt={ product.title } /> */}
                    <p>{`#0${index + 1}`}</p>
                    <h2 className="itemsTitle">{this.reduceTitle(product.title)}</h2>
                    <p className="price-item">
                      {`R$ ${(product.price * product.quantidade)
                        .toFixed(2).toLocaleString('pt-BR',
                          { maximunFractionDigits: 2 })}`}
                    </p>
                  </li>))}
                <section className="container-section-price">
                  <p>Total:</p>
                  <p className="total-number">
                    { `R$ ${((CartItemsList).reduce(
                      (acc, current) => acc + (current.price * current.quantidade), 0,
                    )).toLocaleString('pt-BR',
                      { maximunFractionDigits: 2 })}`}
                  </p>
                </section>
              </ul>
            </section>
          </div>
        )}

      </div>

    );
  }
}
Checkout.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
  clearItemsCart: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
