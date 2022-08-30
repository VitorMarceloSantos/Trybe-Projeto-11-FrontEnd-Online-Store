import React, { Component } from 'react';
import '../styles/PaymentsCss.css';

export default class MethodsPaymetns extends Component {
  render() {
    return (
      <div className="container-payments">
        <section className="payments">
          <div className="speed pay">
            <i className="fa-solid fa-handshake-simple" />
            <div>
              <p className="primary">Pagamento rápido e seguro</p>
              <p className="second">com Mercado Pago</p>
            </div>
          </div>
          <div className="tax pay">
            <i className="fa-solid fa-credit-card" />
            <div>
              <p className="primary">Até 12 parcelas sem juros</p>
              <p className="second">Ver mais</p>
            </div>
          </div>
          <div className="tax pay">
            <i className="fa-solid fa-hand-holding-dollar" />
            <div>
              <p className="primary">Parcelamento sem cartão</p>
              <p className="second">Conheça o Mercado Crédito</p>
            </div>
          </div>
          <div className="pix pay">
            <i className="fa-solid fa-qrcode" />
            <div>
              <p className="primary">Via Pix</p>
              <p className="second">Ver mais</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
