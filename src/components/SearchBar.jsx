import React, { useContext } from 'react';
import SearchContext from '../context/searchContext';

function SearchBar() {
  const {
    selectedRadio, setSelectedRadio,
    searchValue, setSearchValue,
  } = useContext(SearchContext);

  const handleRadioChange = ({ target }) => {
    const { value } = target;
    setSelectedRadio(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedRadio);
  };

  return (
    <form id="search">
      <input
        type="text"
        data-testid="search-input"
        value={ searchValue }
        onChange={ ({ target }) => setSearchValue(target.value) }
      />

      <div id="search-filter" onChange={ handleRadioChange }>
        <label htmlFor="ingredient">
          <input
            defaultChecked
            id="ingredient"
            type="radio"
            name="search"
            value="ingredient"
            data-testid="ingredient-search-radio"
          />
          Ingredient
        </label>

        <label htmlFor="name">
          <input
            id="name"
            type="radio"
            name="search"
            value="name"
            data-testid="name-search-radio"
          />
          Name
        </label>

        <label htmlFor="first-letter">
          <input
            id="first-letter"
            type="radio"
            name="search"
            value="first-letter"
            data-testid="first-letter-search-radio"
          />
          First letter
        </label>
      </div>
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ handleSubmit }
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
