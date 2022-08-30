import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/IndexCategoryCss.css';

export default class IndexCategory extends Component {
  render() {
    const { handleChangeCategory } = this.props;
    return (
      <section className="container-category">
        <div className="container-figures">
          <div className="container-figures-1">
            <button
              className="div-figure select-all games"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-gamepad select-all games" />
              <p className="select-all games">Games</p>
            </button>
            <button
              className="div-figure select-all informatica"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-computer select-all informatica" />
              <p className="select-all informatica">Informática</p>
            </button>
            <button
              className="div-figure select-all veiculos"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-car select-all veiculos" />
              <p className="select-all veiculos">Carros, Motos e Outros</p>
            </button>
            <button
              className="div-figure select-all roupas"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-shirt select-all roupas" />
              <p className="select-all roupas">Roupas e Calçados</p>
            </button>
            <button
              className="div-figure select-all celulares"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-mobile-screen-button select-all celulares" />
              <p className="select-all celulares">Celulars e Telefones</p>
            </button>
          </div>
          <div className="container-figures-2">
            <button
              className="div-figure select-all eletronicos"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-microphone select-all eletronicos" />
              <p className="select-all eletronicos">Eletrônicos e Áudio</p>
            </button>
            <button
              className="div-figure select-all ferramentas"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-screwdriver-wrench select-all ferramentas" />
              <p className="select-all ferramentas">Ferramentas</p>
            </button>
            <button
              className="div-figure select-all petshop"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-cat select-all petshop" />
              <p className="select-all petshop">Animais e Shop</p>
            </button>
            <button
              className="div-figure select-all mobilia"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-house select-all mobilia" />
              <p className="select-all mobilia">Casa, Móveis e Decoração</p>
            </button>
            <button
              className="div-figure select-all esportes"
              type="button"
              onClick={ handleChangeCategory }
            >
              <i className="fa-solid fa-person-biking select-all esportes" />
              <p className="select-all esportes">Esporte e Fitness</p>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
IndexCategory.propTypes = {
  handleChangeCategory: PropTypes.func.isRequired,
};
