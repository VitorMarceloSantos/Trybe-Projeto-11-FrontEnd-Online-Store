import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/detalhes.css';

export default class ReviewSection extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: false,
      text: '',
      allReviews: [],
      validReview: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const storagedReviews = JSON.parse(localStorage.getItem(id));
    console.log(storagedReviews);
    if (storagedReviews !== null) {
      this.setState({
        allReviews: storagedReviews,
      });
    }
  }

  enableSubmitButton = () => {
    const { rating, email } = this.state;
    const validEmail = email.includes('@') && email.includes('.com');
    const validation = validEmail && (rating !== false);
    this.setState({ validReview: validation });
  }

  handleChange = ({ target: { name, value } }) => {
    // adicionar condição para os radio buttons.
    this.setState({
      [name]: value,
    }, () => {
      this.enableSubmitButton();
    });
  }

  handleReview = (event) => {
    event.preventDefault();
    const { email, rating, text, validReview } = this.state;
    const { id } = this.props;
    const newReview = {
      email,
      rating,
      text,
    };
    if (validReview) {
      this.setState((prevState) => ({
        email: '',
        rating: false,
        text: '',
        allReviews: [...prevState.allReviews, newReview],
      }), () => {
        const { allReviews } = this.state;
        localStorage.setItem(id, JSON.stringify(allReviews));
      });
    }
  }

  render() {
    const { email, text, allReviews, validReview } = this.state;
    return (
      <section className="form-review">
        <form className="review-section">
          <label htmlFor="review-email">
            Email:
            <input
              name="email"
              type="email"
              data-testid="product-detail-email"
              id="review-email"
              onChange={ this.handleChange }
              value={ email }
              className="input-email"
            />
          </label>
          <div className="rating-radio-buttons">
            <label htmlFor="rating-1">
              <input
                value="1"
                type="radio"
                onClick={ this.handleChange }
                name="rating"
                id="rating-1"
                data-testid="1-rating"
              />
              1
            </label>
            <label htmlFor="rating-2">
              <input
                value="2"
                type="radio"
                onClick={ this.handleChange }
                name="rating"
                id="rating-2"
                data-testid="2-rating"
              />
              2
            </label>
            <label htmlFor="rating-3">
              <input
                value="3"
                type="radio"
                onClick={ this.handleChange }
                name="rating"
                id="rating-3"
                data-testid="3-rating"
              />
              3
            </label>
            <label htmlFor="rating-4">
              <input
                value="4"
                type="radio"
                onClick={ this.handleChange }
                name="rating"
                id="rating-4"
                data-testid="4-rating"
              />
              4
            </label>
            <label htmlFor="rating-5">
              <input
                value="5"
                type="radio"
                onClick={ this.handleChange }
                name="rating"
                id="rating-5"
                data-testid="5-rating"
              />
              5
            </label>
          </div>
          <label htmlFor="product-detail-evaluation" className="review-textarea">
            Deixe sua avaliação:
            <textarea
              name="text"
              data-testid="product-detail-evaluation"
              id="product-detail-evaluation"
              onChange={ this.handleChange }
              value={ text }
            />
          </label>
          <div className="button-avaliar">
            <button
              type="submit"
              data-testid="submit-review-btn"
              onClick={ this.handleReview }
              className="input-avaliar"
            >
              Avaliar

            </button>
          </div>
        </form>
        {
          (!validReview && email.length > 0 && text.length > 0) && (
            <p
              className="review-error-msg"
              data-testid="error-msg"
            >
              Campos inválidos

            </p>)
        }
        {
          allReviews.map((rev) => (
            <section key={ `${rev.email} - ${rev.text}` } className="review">
              <div className="review-email-rating">
                <p data-testid="review-card-email">{ rev.email }</p>
                <p data-testid="review-card-rating">{ rev.rating }</p>
              </div>
              <div className="review-evaluation">
                <p data-testid="review-card-evaluation">{ rev.text }</p>
              </div>
            </section>
          ))
        }
      </section>
    );
  }
}

ReviewSection.propTypes = {
  id: PropTypes.string.isRequired,
};
