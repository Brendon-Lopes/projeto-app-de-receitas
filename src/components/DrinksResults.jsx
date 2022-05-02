import React, { useContext } from 'react';
import SearchContext from '../context/searchContext';
import { fetchDrinksByCategory } from '../services/fetchAPI';

function DrinksResults() {
  const { drinksList, setDrinksList,
    drinksCategoryList } = useContext(SearchContext);

  const maxNumber = 12;
  const MAX_CATEGORY = 5;

  const filterCategory = async (category) => {
    const data = await fetchDrinksByCategory(category);
    setDrinksList(data);
  };

  return (
    <main>
      <section>
        {drinksCategoryList
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

      {drinksList.length > 0 && drinksList
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
