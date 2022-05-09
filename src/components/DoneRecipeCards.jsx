import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

function DoneRecipesCards({ doneRecipes }) {
  return (
    <div>
      {doneRecipes.map((e, index) => (
        <div key={ index }>
          <Link to={ `${e.type}s/${e.id}` }>
            <img
              style={ { maxWidth: '100vw' } }
              data-testid={ `${index}-horizontal-image` }
              src={ e.image }
              alt={ e.name }
            />
          </Link>
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {e.nationality ? `${e.nationality} - ${e.category}` : e.alcoholicOrNot }
            category
          </p>
          <Link to={ `${e.type}s/${e.id}` }>
            <p data-testid={ `${index}-horizontal-name` }>{e.name}</p>
          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>{e.doneDate}</p>
          <ShareButton
            dataTest={ `${index}-horizontal-share-btn` }
            route={ `${e.type}s/${e.id}` }
          />
          {e.tags.map((tag) => (
            <p key={ index } data-testid={ `${index}-${tag}-horizontal-tag` }>
              {tag}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

DoneRecipesCards.propTypes = {
  doneRecipes: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default DoneRecipesCards;
