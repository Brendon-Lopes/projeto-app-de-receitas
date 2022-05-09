import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ExploreDrinksComponent() {
  const [randomDrink, setRandomDrink] = useState('');

  async function fetchRandomDrink() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const recipe = await response.json();
    return setRandomDrink(recipe.drinks[0]?.idDrink);
  }

  useEffect(() => {
    fetchRandomDrink();
  }, []);

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

      <Link to={ `/drinks/${randomDrink}` }>
        <Button
          variant="secondary"
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </Button>
      </Link>
    </div>
  );
}

export default ExploreDrinksComponent;
