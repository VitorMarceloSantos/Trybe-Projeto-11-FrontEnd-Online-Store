import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getCategories } from '../services/api';
import '../styles/category-container.css';

export default class CategoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categoriesFromAPI = await getCategories();
    this.setState({
      categories: categoriesFromAPI,
    });
  }

  render() {
    const { handleRadioClick } = this.props;
    const { categories } = this.state;
    return (
      <section className="category-container">
        {categories.map((category, index) => (
          // eslint-disable-next-line no-magic-numbers
          index < 18 && ( // limitando o tamanho do navBar
            <NavDropdown.Item key={ category.id } className="nav-item-category">
              <input
                className="btn-category"
                type="button"
                id={ category.id }
                name="categorie"
                onClick={ handleRadioClick }
                value={ category.name }
              />
            </NavDropdown.Item>
          )
        ))}
      </section>
    );
  }
}

CategoryContainer.propTypes = {
  handleRadioClick: PropTypes.func.isRequired,
};
