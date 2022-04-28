import React, { useState } from 'react';
import propTypes from 'prop-types';
import SearchContext from '.';

function SearchProvider({ children }) {
  const [selectedRadio, setSelectedRadio] = useState('ingredient');
  const [searchValue, setSearchValue] = useState('');

  const value = {
    selectedRadio,
    setSelectedRadio,
    searchValue,
    setSearchValue,
  };

  return (
    <SearchContext.Provider value={ value }>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default SearchProvider;
