import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/AddItemCartCss.css';
import resetStateAction from '../Redux/Actions';

class AddItemCartButton extends Component {
  render() {
    const { path, handleClickAddCart, product } = this.props;
    const { dispatch } = this.props;
    dispatch(resetStateAction({ finish: false }));
    return (
      <button
        className="add-item-cart-button"
        data-testid={ path.includes('Detalhes')
          ? 'product-detail-add-to-cart' : 'product-add-to-cart' }
        type="button"
        onClick={
          () => handleClickAddCart(product)
        }
      >
        <div className="cart-icon">
          <i className="fa-solid fa-cart-plus" />
        </div>
      </button>
    );
  }
}

AddItemCartButton.propTypes = {
  product: PropTypes.arrayOf({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddItemCartButton);
