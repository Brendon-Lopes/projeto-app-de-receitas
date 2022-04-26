import React, { useContext } from 'react';
import Context from '../context/context';

function Login() {
  const {
    email,
    password,
    isDisabled,
    changeEmail,
    changePassword,
    // handleClick,
  } = useContext(Context);

  return (
    <form>
      <label htmlFor="email-input">
        <input
          data-testid="email-input"
          type="text"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ changeEmail }
        />
      </label>

      <label htmlFor="password-input">
        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Senha"
          value={ password }
          onChange={ changePassword }
        />
      </label>

      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ isDisabled }
        // onClick={ handleClick }
      >
        Enter
      </button>
    </form>
  );
}

export default Login;
