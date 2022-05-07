import React from 'react';
import propTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteButtonCard({ id, index }) {
  const [, setFavoriteRecipes] = useLocalStorage('favoriteRecipes', []);

  const handleFavoriteClick = () => {
    setFavoriteRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
  };

  return (
    <img
      src={ blackHeartIcon }
      alt="remove from favorites"
      role="presentation"
      data-testid={ `${index}-horizontal-favorite-btn` }
      onClick={ handleFavoriteClick }
    />
  );
}

FavoriteButtonCard.propTypes = {
  id: propTypes.string,
  index: propTypes.number,
}.isRequired;

export default FavoriteButtonCard;
