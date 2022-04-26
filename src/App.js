import React from 'react';
import './App.css';
import Routes from './routes';
import ContextProvider from './context/contexProvider';
import Login from './components/Login';

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Login />
      </Routes>
    </ContextProvider>
  );
}

export default App;
