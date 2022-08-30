import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import { GiMagnifyingGlass } from 'react-icons/gi';
import ShoppingTrybe from '../images/ShoppingTrybe.png';
import ButtonCart from './ButtonCart';

export default class Header extends Component {
  render() {
    const {
      handleChange,
      handleSearchClick,
      searchBar,
      CartItemsList,
      resetDevelopsState,
    } = this.props;
    return (
      <header>
        <div className="container-header">
          <Link
            to="/"
            onClick={ resetDevelopsState }
          >
            <img
              src={ ShoppingTrybe }
              alt="Logo da Trybe"
              className="logoTrybe"
            />
          </Link>
          <div className="container-searchBar">
            <label htmlFor="searchBar">
              <input
                type="text"
                id="searchBar"
                name="searchBar"
                value={ searchBar }
                onChange={ handleChange }
                data-testid="query-input"
                placeholder="Buscar produtos, marcas e muito mais ..."
              />
            </label>
            <button
              type="button"
              onClick={ handleSearchClick }
              data-testid="query-button"
            >
              <GiMagnifyingGlass />

            </button>
          </div>
          <div className="container-cart">
            <ButtonCart
              CartItemsList={ CartItemsList }
            />
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  searchBar: PropTypes.string.isRequired,
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  resetDevelopsState: PropTypes.func.isRequired,
};
