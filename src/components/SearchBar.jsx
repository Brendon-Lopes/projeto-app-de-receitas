import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchContext from '../context/searchContext';
import usePath from '../hooks/usePath';
import fetchFoodAPI from '../services/fetchFoodAPI';

function SearchBar() {
  const { pathname, id, name } = usePath();
  const { push } = useHistory();

  const {
    selectedRadio, setSelectedRadio,
    searchValue, setSearchValue,
    setFoodsList, setDrinksList,
  } = useContext(SearchContext);

  const handleRadioChange = ({ target }) => {
    const { value } = target;
    setSelectedRadio(value);
  };

  const validation = () => {
    if (searchValue === '') {
      return global.alert('Please enter a search term');
    }
    if (selectedRadio === 'first-letter' && searchValue.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validation();
    const data = await fetchFoodAPI(selectedRadio, searchValue, pathname);
    if (data[name] === null) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (data[name].length === 1) {
      push(`${pathname}/${data[name][0][id]}`);
    }
    if (pathname === '/foods') setFoodsList(data[name]);
    if (pathname === '/drinks') setDrinksList(data[name]);
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
