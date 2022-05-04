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
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient

        </button>
      </Link>

      <Link to={ `/drinks/${randomDrink}` }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </Link>
    </div>
  );
}

export default ExploreDrinksComponent;
