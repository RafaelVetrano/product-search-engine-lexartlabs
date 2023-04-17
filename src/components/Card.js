import PropTypes from 'prop-types';
import React from 'react';
import style from './card.module.css';

// eslint-disable-next-line react/require-default-props
function Card({ permalink, price, thumbnail, title, web, category, brand }) {
  return (
    <div className={ style.card }>
      <div>
        <img src={ thumbnail } alt="produto" />
        <div>
          <h3>{title}</h3>
          <ul>
            <li>
              {`Categoria: ${category}` }
            </li>
            <li>
              {`Site: ${web}`}
            </li>
            <li>
              {`Marca: ${brand}`}
            </li>
          </ul>
          <h4>{`R$: ${price}`}</h4>
          <a href={ permalink } target="_blank" rel="noreferrer"> VER MAIS </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string,
  permalink: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  web: PropTypes.string,
  category: PropTypes.string,
  brand: PropTypes.string,
};

export default Card;
