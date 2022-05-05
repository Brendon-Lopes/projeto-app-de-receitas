import React from 'react';
import { Button } from 'react-bootstrap';
// import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ExploreDrinksComponent() {
  return (
    <div>
      <Link to="/explore/drinks/ingredients">
        <Button
          variant="secondary"
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient

        </Button>
      </Link>

      <Button
        variant="secondary"
        type="button"
        data-testid="explore-surprise"
        // onClick={ () => history.push(`/drinks/${randomDrink[0].idDrink}`) }
      >
        Surprise me!
      </Button>

    </div>
  );
}

export default ExploreDrinksComponent;
