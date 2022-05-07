import React from 'react';
import propTypes from 'prop-types';
import ShareFavoriteButton from './ShareFavoriteButton';
import FavoriteButtonCard from './FavoriteButtonCard';

function FavoriteCard({ data:
  { id, image, name, nationality, category, type, alcoholicOrNot }, index }) {
  return (
    <div>
      <img
        src={ image }
        alt={ name }
        data-testid={ `${index}-horizontal-image` }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        {nationality ? `${nationality} - ${category}` : `${alcoholicOrNot} - ${category}`}
      </p>
      <p data-testid={ `${index}-horizontal-name` }>{name}</p>
      <ShareFavoriteButton
        id={ id }
        type={ type === 'food' ? 'foods' : 'drinks' }
        index={ index }
      />
      <FavoriteButtonCard
        id={ id }
        index={ index }
      />
    </div>
  );
}

FavoriteCard.propTypes = {
  id: propTypes.string,
  image: propTypes.string,
  name: propTypes.string,
  index: propTypes.number,
}.isRequired;

export default FavoriteCard;
