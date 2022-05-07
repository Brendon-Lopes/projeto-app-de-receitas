import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import ShareFavoriteButton from './ShareFavoriteButton';
import FavoriteButtonCard from './FavoriteButtonCard';

function FavoriteCard({ data:
  { id, image, name, nationality, category, type, alcoholicOrNot }, index }) {
  return (
    <div>
      <Link to={ `${type === 'food' ? 'foods' : 'drinks'}/${id}` }>
        <img
          style={ { maxWidth: '100vw' } }
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
        />
        <p data-testid={ `${index}-horizontal-name` }>{name}</p>
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {nationality ? `${nationality} - ${category}` : `${alcoholicOrNot} - ${category}`}
      </p>
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
