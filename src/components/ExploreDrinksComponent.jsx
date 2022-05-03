import React from 'react';
// import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ExploreDrinksComponent() {
  return (
    <div>
      <Link to="/explore/drinks/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient

        </button>
      </Link>

      <button
        type="button"
        data-testid="explore-surprise"
        // onClick={ () => history.push(`/drinks/${randomDrink[0].idDrink}`) }
      >
        Surprise me!
      </button>

    </div>
  );
}

export default ExploreDrinksComponent;
