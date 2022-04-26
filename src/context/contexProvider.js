import React from 'react';
import propTypes from 'prop-types';
import Context from './context';

function ContextProvider({ children }) {
  return (
    <Context.Provider value={ 1 }>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: propTypes.node,
}.isRequired;
