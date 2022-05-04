import React from 'react';
import './App.css';
import ContextProvider from './context/generalContext/contexProvider';
import SearchProvider from './context/searchContext/searchProvider';
import DetailsProvider from './context/detailsContext/detailsProvider';
import Routes from './routes';

function App() {
  return (
    <ContextProvider>
      <SearchProvider>
        <DetailsProvider>
          <Routes />
        </DetailsProvider>
      </SearchProvider>
    </ContextProvider>
  );
}

export default App;
