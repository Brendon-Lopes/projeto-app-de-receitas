import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Header from '../components/Header';
import DoneRecipesCards from '../components/DoneRecipeCards';

function DoneRecipes() {
  const [doneRecipesState] = useLocalStorage('doneRecipes', []);
  const [dataFilter, setDataFilter] = useState(doneRecipesState);

  function filterType(filter) {
    if (filter) {
      const result = doneRecipesState.filter((e) => e.type === filter);
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
      <DoneRecipesCards doneRecipes={ dataFilter } />
    </section>
  );
}

export default DoneRecipes;
