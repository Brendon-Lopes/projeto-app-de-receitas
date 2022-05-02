import React, { useContext } from 'react';
import SearchContext from '../context/searchContext';
import { fetchFoodsByCategory } from '../services/fetchAPI';

function FoodsResults() {
  const { foodsList, setFoodsList,
    foodsCategoryList } = useContext(SearchContext);

  const maxNumber = 12;
  const MAX_CATEGORY = 5;

  const filterCategory = async (category) => {
    const data = await fetchFoodsByCategory(category);
    setFoodsList(data);
  };

  return (
    <main>
      <section>
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
        .map(({ strMeal, strMealThumb }, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <p data-testid={ `${index}-card-name` }>{strMeal}</p>
            <img src={ strMealThumb } alt="recipe" data-testid={ `${index}-card-img` } />
          </div>
        ))}
    </main>
  );
}

export default FoodsResults;
