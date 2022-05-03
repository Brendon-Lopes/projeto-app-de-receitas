import React from 'react';
import propTypes from 'prop-types';

function RecomendationCard({ imgSrc, category, name, index }) {
  return (
    <div
      className="carousel-item"
      data-testid={ `${index}-recomendation-card` }
    >
      <img src={ imgSrc } alt={ name } />
      <p>{category}</p>
      <h3 data-testid={ `${index}-recomendation-title` }>{name}</h3>
    </div>
  );
}

RecomendationCard.propTypes = {
  imgSrc: propTypes.string,
  category: propTypes.string,
  name: propTypes.string,
  index: propTypes.number,
}.isRequired;

export default RecomendationCard;
