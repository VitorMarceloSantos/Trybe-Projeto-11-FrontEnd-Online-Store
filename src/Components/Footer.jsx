import React, { Component } from 'react';

import logoTrybe from '../images/logoTrybe.png';
import '../styles/FooterCss.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="logo_trybe">
          <a href="https://www.betrybe.com/" target="_blank" rel="external noreferrer">
            <img src={ logoTrybe } alt="Logo Trybe" />
          </a>
          <small
            className="desenvolvedor"
          >
            &copy;Desenvolvido por Equipe 17 - Turma 23 - Tribo B
          </small>
        </div>
      </footer>
    );
  }
}
