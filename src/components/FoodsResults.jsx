import React, { useContext } from 'react';
import SearchContext from '../context/searchContext';

function FoodsResults() {
  const { apiData } = useContext(SearchContext);

  const maxNumber = 12;

  return (
    <main>
      {apiData.length > 0 && apiData
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
