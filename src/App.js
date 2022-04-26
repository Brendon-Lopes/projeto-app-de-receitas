import React from 'react';
import './App.css';
import Login from './components/Login';
import ContextProvider from './context/contexProvider';
import Routes from './routes';

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
