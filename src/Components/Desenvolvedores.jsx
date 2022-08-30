import React, { Component } from 'react';
import ArturSenna from '../images/ArturSenna.png';
import AnaBeatriz from '../images/AnaBeatriz.png';
import MiguelInacio from '../images/MiguelInacio.png';
import RuhamLeal from '../images/RuhamLeal.png';
import VitorMarcelo from '../images/VitorMarcelo.png';
import '../styles/DesenvolvedoresCss.css';

export default class Desenvolvedores extends Component {
  render() {
    const developersData = [{ image: VitorMarcelo, name: 'Vitor Marcelo', linkedin: 'https://www.linkedin.com/in/vitor-marcelo-santos/', gitHub: 'https://github.com/VitorMarceloSantos' }, { image: ArturSenna, name: 'Artur Senna', linkedin: 'https://www.linkedin.com/in/artur-senna-9a2025206/', gitHub: 'https://github.com/artursennass' }, { image: MiguelInacio, name: 'Miguel Inácio', linkedin: 'https://www.linkedin.com/in/miguel-inacio/', gitHub: 'https://github.com/miguel-inacio' }, { image: RuhamLeal, name: 'Ruham Leal', linkedin: 'https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/', gitHub: 'https://github.com/RuhamLeal' }, { image: AnaBeatriz, name: 'Ana Beatriz', linkedin: 'https://www.linkedin.com/in/ana-beatriz-martins-lima-4009a8147/', gitHub: 'https://github.com/ana-beatriz-martins-lima' }];
    return (
      <section>
        <h2 className="title-develops-initial">Desenvolvedores</h2>
        <div className="container-develops">
          {developersData.map((develop) => (
            <div className="container-card-develops" key={ develop.name }>
              <div className="image-develop">
                <img src={ develop.image } alt={ develop.name } />
              </div>
              <h3 className="name-develop">
                {develop.name}
              </h3>
              <p>Linkedin:</p>
              <div className="container-text">
                <a
                  className="develop-linkedin"
                  href={ develop.linkedin }
                  target="_blank"
                  rel="noreferrer"
                >
                  {develop.linkedin}
                </a>
              </div>
              <p>GitHub:</p>
              <div className="container-text">
                <a
                  className="develop-gitHub"
                  href={ develop.gitHub }
                  target="_blank"
                  rel="noreferrer"
                >
                  {develop.gitHub}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
