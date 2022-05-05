import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ExploreFoodsComponent() {
  return (
    <div>
      <ButtonGroup
        style={ { width: '100%' } }
        className="me-2"
        aria-label="First group"
      >
        <Link to="/explore/foods/ingredients">
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient

          </Button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality

          </Button>
        </Link>

        <Button
          variant="secondary"
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ExploreFoodsComponent;
