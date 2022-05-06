import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FoodsIngredientsCard() {
  const [ingredients, setIngredient] = useState('');

  async function fetchIngredients() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    return setIngredient(data.meals);
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  const MAX_INGREDIENTS = 12;

  return (
    <div>
      {ingredients.length !== 0
      && ingredients
        .slice(0, MAX_INGREDIENTS)
        .map((item, index) => (
          <Link to="/foods" key={ index }>
            <button
              type="button"
              data-testid={ `${index}-ingredient-card` }
              value={ item.strIngredient }
            >
              <h3 data-testid={ `${index}-card-name` }>{item.strIngredient}</h3>
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
                alt={ item.strIngredient }
              />
            </button>
          </Link>
        ))}
    </div>
  );
}

export default FoodsIngredientsCard;
