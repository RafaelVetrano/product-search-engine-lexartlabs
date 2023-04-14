import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/require-default-props
function Card({ permalink, price, thumbnail, title }) {
  return (
    <div className="card">
      <img src={ thumbnail } alt="produto" />
      <div>
        <h3>{title}</h3>
        <h5>{`R$: ${price}`}</h5>
        <a href={ permalink } target="_blank" rel="noreferrer"> click </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string,
  permalink: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
