import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

class ProductCardDetails extends Component {
  render() {
    const { product, productDetails } = this.props;
    const { price, thumbnail, title } = product;
    return (
      <div>
        <section className="details-main-section">
          <p data-testid="product-detail-name" id="product-detail-name">{title}</p>
          <p data-testid="product-detail-price">{`R$${price}`}</p>
          <div className="detalhes-img">
            <img
              src={ thumbnail }
              alt={ title }
              data-testid="product-detail-imageproduct-detail-image"
            />
          </div>
        </section>
        <section>
          <p>Especificações Técnicas</p>
          {productDetails.map((p) => (
            <p key={ p.name }>{`${p.name}: ${p.value_name}`}</p>
          ))}
        </section>
      </div>

    );
  }
}
ProductCardDetails.propTypes = {
  // product: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  productDetails: PropTypes.arrayOf(shape).isRequired,
};

export default ProductCardDetails;
