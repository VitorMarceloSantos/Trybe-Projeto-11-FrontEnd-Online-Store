/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/CartCss.css';
import CartEmpty from '../images/CartEmpty.png';

class Carrinho extends React.Component {
  componentDidMount() {
    const { reset } = this.props;
    if ((localStorage.getItem('CartItems') !== null) && (!reset.finish)) {
      const { cartItemsStateUpdate } = this.props;
      cartItemsStateUpdate();
    }
  }

  handleOnChange = ({ target: { id, title, value, name } }) => {
    const param1 = id !== undefined ? id : name;
    const param2 = title !== undefined ? title : value;
    const { handleClickAmoutCart } = this.props;
    handleClickAmoutCart(param2, param1);
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
    let { CartItemsList } = this.props;
    const { reset } = this.props;
    if (reset.finish) CartItemsList = [];
    const verification = CartItemsList.length > 0;
    const arrayProducts = [];
    return (
      <div className="container-cart-global">
        {
          verification ? (
            <div className="container-global">
              <div className="container-cart-products">
                {
                  CartItemsList.map((item, i) => (
                    <section key={ `${item.title}${i}` }>
                      <div className="container-line-product">
                        <div className="array-products">
                          {`# 0${arrayProducts.push({
                            price: item.price, quant: item.quantidade })}`}
                        </div>
                        <img
                          src={ item.thumbnail }
                          alt={ item.title }
                        />
                        <div className="container-cart-center">
                          <h1
                            data-testid="shopping-cart-product-name"
                            className="cart-title"
                          >
                            {`${this.reduceTitle(item.title)}
                              - R$ ${item.price.toLocaleString('pt-BR',
                      { maximunFractionDigits: 2 })}`}
                          </h1>
                          <div className="container-amount">
                            <button
                              data-testid="product-decrease-quantity"
                              type="button"
                              name={ item.id }
                              value="decrease"
                              onClick={ this.handleOnChange }
                            >
                              {/* Utiliza as tags id e title, para passar os paramentros para a função ao clicar no icone(<i>) */}
                              <i
                                className="fa-solid fa-minus"
                                id={ item.id }
                                title="decrease"
                              />
                            </button>
                            <p
                              data-testid="shopping-cart-product-quantity"
                            >
                              { item.quantidade }
                            </p>
                            <button
                              data-testid="product-increase-quantity"
                              type="button"
                              name={ item.id }
                              value="increase"
                              onClick={ this.handleOnChange }
                            >
                              <i
                                className="fa-solid fa-plus"
                                id={ item.id }
                                title="increase"
                              />
                            </button>
                            <div className="button-delete">
                              <button
                                data-testid="remove-product"
                                type="button"
                                name={ item.id }
                                value="remove"
                                onClick={ this.handleOnChange }
                              >
                                <i
                                  className="fa-solid fa-trash"
                                  id={ item.id }
                                  title="remove"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <h2 className="cart-price">
                          {`R$ ${(item.price * item.quantidade).toLocaleString('pt-BR',
                            { maximunFractionDigits: 2 })}` }
                        </h2>
                      </div>
                    </section>))
                }
              </div>
              <div className="container-total-products">
                <section className="container-section-price">
                  <p>Total:</p>
                  <p className="total-number">
                    { `R$ ${(arrayProducts.reduce(
                      (acc, current) => acc + (current.price * current.quant), 0,
                    )).toLocaleString('pt-BR',
                      { maximunFractionDigits: 2 })}`}
                  </p>
                </section>
              </div>
            </div>
          )
            : (
              <div className="cart-empty">
                <img src={ CartEmpty } alt="Cart Empty" />
                <p
                  data-testid="shopping-cart-empty-message"
                  className="text-cart-empty"
                >
                  Seu carrinho está vazio
                </p>
              </div>)
        }
        <div className="container-buttons-cart">
          <Link
            to="/"
          >
            <button
              type="button"
            >
              Continuar Comprando
            </button>
          </Link>
          {verification && (
            <Link
              data-testid="checkout-products"
              to="/Checkout"
            >
              <button
                type="button"
              >
                Finalizar Compra
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

Carrinho.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
  handleClickAmoutCart: PropTypes.func.isRequired,
  cartItemsStateUpdate: PropTypes.func.isRequired,
  reset: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  reset: state.resetReducer,
});

export default connect(mapStateToProps, null)(Carrinho);
