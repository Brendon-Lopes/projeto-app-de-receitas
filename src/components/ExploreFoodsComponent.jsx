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
      <Link to="/explore/foods/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient

        </button>
      </Link>

      <Link to="/explore/foods/nationalities">
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality

        </button>
      </Link>

      <Link to={ `/foods/${randomFood}` }>
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

export default ExploreFoodsComponent;
