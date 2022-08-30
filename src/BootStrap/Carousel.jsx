import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/BrandsCss.css';
import adidas from '../images/adidas.jpg';
import aramis from '../images/aramis.jpg';
import decathlon from '../images/decathlon.jpg';
import garnier from '../images/garnier.jpg';
import hering from '../images/hering.jpg';
import mac from '../images/mac.jpg';
import nike from '../images/nike.jpg';
import democratas from '../images/democratas.jpg';
import aple from '../images/aple.jpg';
import samsung from '../images/samsung.jpg';
import marisa from '../images/marisa.jpg';
import motorola from '../images/motorola.jpg';

export default class CarouselBrands extends Component {
  render() {
    const { handleChangeBrands } = this.props;
    return (
      <Carousel>
        <Carousel.Item>
          <div className="container-brands">
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Adidas"
            >
              <img src={ adidas } alt="Adidas" name="Adidas" />
              <p>ADIDAS</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Aramis"
            >
              <img src={ aramis } alt="Aramis" name="Aramis" />
              <p>ARAMIS</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Decathlon"
            >
              <img src={ decathlon } alt="Decathlon" name="Decathlon" />
              <p>DECATHLON</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Garnier"
            >
              <img src={ garnier } alt="Garnier" name="Garnier" />
              <p>GARNIER</p>
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-brands">
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Hering"
            >
              <img src={ hering } alt="Hering" name="Hering" />
              <p>HERING</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Mac"
            >
              <img src={ mac } alt="Mac" name="Mac" />
              <p>MAC</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Nike"
            >
              <img src={ nike } alt="Nike" name="Nike" />
              <p>NIKE</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Democratas"
            >
              <img src={ democratas } alt="Democratas" name="Democratas" />
              <p>DEMOCRATAS</p>
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-brands">
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Marisa"
            >
              <img src={ marisa } alt="Marisa" name="Marisa" />
              <p>MARISA</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Aple"
            >
              <img src={ aple } alt="Aple" name="Aple" />
              <p>APLE</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Motorola"
            >
              <img src={ motorola } alt="Motorola" name="Motorola" />
              <p>MOTOROLA</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeBrands }
              name="Samsung"
            >
              <img src={ samsung } alt="Samsung" name="Samsung" />
              <p>SAMSUNG</p>
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
CarouselBrands.propTypes = {
  handleChangeBrands: PropTypes.func.isRequired,
};
