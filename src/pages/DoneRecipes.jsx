import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';

function DoneRecipes() {
  const [doneRecipesState] = useLocalStorage('doneRecipes', []);
  const [dataFilter, setDataFilter] = useState(doneRecipesState);

  function filterType(filter) {
    if (filter) {
      const result = doneRecipesState.filter((e) => e.type === filter);
      console.log(doneRecipesState);
      console.log(doneRecipesState[0].type);
      console.log('filter', filter);
      console.log(result);
      return setDataFilter(result);
    }
    setDataFilter(doneRecipesState);
  }

  return (
    <section>
      <Header title="Done Recipes" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => filterType() }
      >
        All

      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filterType('food') }
      >
        Food

      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterType('drink') }
      >
        Drinks

      </button>
      <div>
        {dataFilter.map((e, index) => (
          <div key={ index }>
            <Link to={ `${e.type}s/${e.id}` }>
              <img
                style={ { maxWidth: '100vw' } }
                data-testid={ `${index}-horizontal-image` }
                src={ e.image }
                alt={ e.name }
              />
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {e.nationality ? `${e.nationality} - ${e.category}` : e.alcoholicOrNot }
              category
            </p>
            <Link to={ `${e.type}s/${e.id}` }>
              <p data-testid={ `${index}-horizontal-name` }>{e.name}</p>
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>{e.doneDate}</p>
            <ShareButton
              dataTest={ `${index}-horizontal-share-btn` }
              route={ `${e.type}s/${e.id}` }
            />
            {e.tags.map((tag) => (
              <p key={ index } data-testid={ `${index}-${tag}-horizontal-tag` }>
                {tag}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoneRecipes;
