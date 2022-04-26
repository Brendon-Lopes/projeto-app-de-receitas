import React from 'react';
import './App.css';
import ContextProvider from './context/contexProvider';
import Login from './components/Login';

function App() {
  return (
    <ContextProvider>
      <Login />
    </ContextProvider>
  );
}

export default App;
