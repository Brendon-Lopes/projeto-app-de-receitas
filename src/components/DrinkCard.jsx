import React, { useEffect, useState } from 'react';
import * as fetchAPI from '../services/fetchAPI';

function DrinkCard() {
  const [allDrinkList, setDrinkList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  function filterCategory(category) {
    const newList = allDrinkList.filter((drink) => drink.strCategory.includes(category));
    setFilteredList(newList);
  }

  async function getCategory() {
    const response = await fetchAPI.getDrinksCategory();
    setCategoryList(response.drinks);
  }

  useEffect(() => {
    const drinksRecipes = async () => {
      const response = await fetchAPI.getDrinksRecipes();
      setDrinkList(response);
      setFilteredList(response);
    };
    drinksRecipes();
    getCategory();
  }, []);

  const MAX_NUM_RECIPE = 12;
  const MAX_CATEGORY = 5;

  return (
    <div>
      <label htmlFor="category-filter">
        Filtre por categoria:
        <select
          onChange={ (event) => {
            filterCategory(event.target.value);
          } }
        >
          {categoryList
            .slice(0, MAX_CATEGORY)
            .map((elem, index) => (
              <option
                key={ index }
                data-testid={ `${elem.strCategory}-category-filter` }
                value={ elem.strCategory }
              >
                {elem.strCategory}
              </option>
            ))}
        </select>
      </label>

      {filteredList
        .slice(0, MAX_NUM_RECIPE)
        .map((recipe, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <h3 data-testid={ `${index}-card-name` }>{recipe.strDrink}</h3>
            <img
              data-testid={ `${index}-card-img` }
              src={ recipe.strDrinkThumb }
              alt={ recipe.strDrink }
            />
          </div>
        ))}
    </div>
  );
}

export default DrinkCard;
