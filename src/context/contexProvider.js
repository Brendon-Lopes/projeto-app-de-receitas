import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from './context';

function ContextProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    const MIN_PASSWORD_LEN = 6;
    if (emailRegex.test(email) && password.length > MIN_PASSWORD_LEN) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const context = {
    email,
    password,
    isDisabled,
    changeEmail,
    changePassword,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: propTypes.node,
}.isRequired;
