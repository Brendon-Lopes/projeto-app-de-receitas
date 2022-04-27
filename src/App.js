import React from 'react';
import './App.css';
import ContextProvider from './context/contexProvider';
import Routes from './routes';

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;
