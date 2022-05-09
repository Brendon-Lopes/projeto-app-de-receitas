import { Button, ButtonGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ExploreFoodsComponent() {
  const [randomFood, setRandomFood] = useState('');

  async function fetchRandomFood() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const recipe = await response.json();
    return setRandomFood(recipe.meals[0]?.idMeal);
  }

  useEffect(() => {
    fetchRandomFood();
  }, []);

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

        <Link to={ `/foods/${randomFood}` }>
          <Button
            variant="secondary"
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}

export default ExploreFoodsComponent;
