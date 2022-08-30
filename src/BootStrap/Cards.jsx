/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AddItemCartButton from '../Components/AddItemCartButton';
import '../styles/CardsBoot.css';

export default class CardsProducts extends Component {
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
    const {
      handleClickAddCart,
      path,
      product } = this.props;
    const { price, title, thumbnail, id, shipping } = product;
    const division = 12;
    return (
      <div>
        <Card className="container-card">
          <Card.Body>
            <Card.Title className="titleCard">{this.reduceTitle(title)}</Card.Title>
            <Card.Img
              variant="bottom"
              src={ thumbnail }
              alt={ title }
              className="imageCard"
            />
            <Card.Text className="priceTotal">
              {`R$ ${price.toLocaleString('pt-BR',
                { minimumFractionDigits: 2 })}`}
            </Card.Text>
            <Card.Text className="priceDivision">
              {`12 x R$ ${Math.floor(price / division).toLocaleString('pt-BR',
                { minimumFractionDigits: 2 })} sem juros`}
            </Card.Text>
            <Card.Text className="shipping">
              {shipping.free_shipping && (
                <div className="container-frete">
                  <div className="shipping">
                    <i className="fa-solid fa-truck-fast" />
                  </div>
                  <p>Frete Grátis</p>
                </div>
              )}
            </Card.Text>
            <div className="container-buttons">
              <Card.Link>
                <Link
                  data-testid="product-detail-link"
                  to={ `/Detalhes/${id}` }
                >
                  Detalhes
                </Link>
              </Card.Link>
              <Card.Link>
                <AddItemCartButton
                  handleClickAddCart={ handleClickAddCart }
                  path={ path }
                  product={ product }
                />
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

CardsProducts.propTypes = {
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
