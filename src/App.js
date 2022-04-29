import React from 'react';
import './App.css';
import ContextProvider from './context/generalContext/contexProvider';
import SearchProvider from './context/searchContext/searchProvider';
import Routes from './routes';

function App() {
  return (
    <ContextProvider>
      <SearchProvider>
        <Routes />
      </SearchProvider>
    </ContextProvider>
  );
}

export default App;
