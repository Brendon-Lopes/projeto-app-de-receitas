import React, { useContext } from 'react';
import SearchContext from '../context/searchContext';

function DrinksResults() {
  const { apiData } = useContext(SearchContext);

  const maxNumber = 12;

  return (
    <main>
      {apiData.length > 0 && apiData
        .filter((_e, index) => index < maxNumber)
        .map(({ strDrink, strDrinkThumb }, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <p data-testid={ `${index}-card-name` }>{strDrink}</p>
            <img src={ strDrinkThumb } alt="recipe" data-testid={ `${index}-card-img` } />
          </div>
        ))}
    </main>
  );
}

export default DrinksResults;
