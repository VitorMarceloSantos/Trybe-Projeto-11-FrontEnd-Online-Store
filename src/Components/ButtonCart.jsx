/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../styles/header.css';

class ButtonCart extends Component {
  render() {
    const { CartItemsList, reset } = this.props;
    const recoveredObject = CartItemsList.length > 0 ? CartItemsList : (localStorage.getItem('CartItems') !== null ? (JSON.parse(localStorage.getItem('CartItems'))) : 0);
    return (
      <div className="container-cart-icon">
        <Link
          data-testid="shopping-cart-button"
          to="/Carrinho"
        >
          <div className="container-item-cart-button">
            <AiOutlineShoppingCart
              className="icon-cart"
            />
          </div>
          {((recoveredObject.length > 0) && (!reset.finish)) && (
            <div className="border-number-items">
              <p
                className="number-items-cart"
                data-testid="shopping-cart-size"
              >
                {recoveredObject !== null
                  ? recoveredObject.reduce((acc, current) => (
                    acc + current.quantidade), 0) : 0}
              </p>
            </div>
          )}
        </Link>
      </div>
    );
  }
}
ButtonCart.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
  reset: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  reset: state.resetReducer,
});

export default connect(mapStateToProps, null)(ButtonCart);
