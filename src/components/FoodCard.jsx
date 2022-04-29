import React, { useEffect, useState } from 'react';
import * as fetchAPI from '../services/fetchAPI';

function FoodCard() {
  const [foodList, setFoodList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  function filterCategory(category) {
    const newList = foodList.filter((food) => food.strCategory.includes(category));
    setFilteredList(newList);
  }

  async function getCategory() {
    const response = await fetchAPI.getFoodsCategory();
    setCategoryList(response.meals);
  }
  console.log(categoryList);

  useEffect(() => {
    const foodRecipes = async () => {
      const response = await fetchAPI.getFoodRecipes();
      setFoodList(response);
      setFilteredList(response);
    };
    foodRecipes();
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
            <h3 data-testid={ `${index}-card-name` }>{recipe.strMeal}</h3>
            <img
              data-testid={ `${index}-card-img` }
              src={ recipe.strMealThumb }
              alt={ recipe.strMeal }
            />
          </div>
        ))}
    </div>
  );
}

export default FoodCard;
