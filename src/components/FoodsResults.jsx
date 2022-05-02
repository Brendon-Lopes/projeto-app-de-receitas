import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from '../context/searchContext';
import { getFoodRecipes, fetchFoodsByCategory } from '../services/fetchAPI';

function FoodsResults() {
  const { foodsList, setFoodsList,
    foodsCategoryList } = useContext(SearchContext);

  const [filtered, setFiltered] = useState('');

  const maxNumber = 12;
  const MAX_CATEGORY = 5;

  const filterCategory = async (category) => {
    if (filtered !== category && category !== 'All') {
      const foodsByCategoryData = await fetchFoodsByCategory(category);
      setFoodsList(foodsByCategoryData);
      setFiltered(category);
    } else {
      const allFoods = await getFoodRecipes();
      setFoodsList(allFoods);
      setFiltered('');
    }
  };

  return (
    <main>
      <section>
        <button
          type="button"
          data-testid="All-category-filter"
          value="All"
          onClick={ (event) => filterCategory(event.target.value) }
        >
          All
        </button>
        {foodsCategoryList
          .slice(0, MAX_CATEGORY)
          .map((elem, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ `${elem.strCategory}-category-filter` }
              value={ elem.strCategory }
              onClick={ (event) => filterCategory(event.target.value) }
            >
              {elem.strCategory}
            </button>
          ))}
      </section>

      {foodsList.length > 0 && foodsList
        .filter((_e, index) => index < maxNumber)
        .map(({ strMeal, strMealThumb, idMeal }, index) => (
          <Link push to={ `/foods/${idMeal}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <p data-testid={ `${index}-card-name` }>{strMeal}</p>
              <img
                src={ strMealThumb }
                alt="recipe"
                data-testid={ `${index}-card-img` }
              />
            </div>
          </Link>
        ))}
    </main>
  );
}

export default FoodsResults;
