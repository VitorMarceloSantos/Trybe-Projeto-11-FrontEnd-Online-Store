import React, { Component } from 'react';
import nenhumProd from '../images/nenhumProd.png';
import '../styles/notFoundCss.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container-not-found">
        <img src={ nenhumProd } alt="Nenhum Produto Encontrado." />
        <h2>Nenhum produto encontrado.</h2>
      </div>
    );
  }
}
