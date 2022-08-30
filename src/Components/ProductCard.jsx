import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsProducts from '../BootStrap/Cards';

export default class ProductCard extends Component {
  render() {
    const { path, product, handleClickAddCart } = this.props;
    // const { price, title, thumbnail, id, shipping } = product;
    // const freeShipping = shipping.free_shipping;
    return (
      <section>
        <CardsProducts
          handleClickAddCart={ handleClickAddCart }
          path={ path }
          product={ product }
        />
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};
