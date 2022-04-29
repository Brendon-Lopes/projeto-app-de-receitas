import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Context from '../context/generalContext/context';
import useLocalStorage from '../hooks/useLocalStorage';

function Login({ history }) {
  const [, setLocalEmail] = useLocalStorage('user', '');
  const [, setMealsToken] = useLocalStorage('mealsToken', '');
  const [, setCocktailsToken] = useLocalStorage('cocktailsToken', '');

  const {
    email,
    password,
    isDisabled,
    changeEmail,
    changePassword,
  } = useContext(Context);

  const handleClick = () => {
    history.push('/foods');
    setLocalEmail({ email });
    setMealsToken(1);
    setCocktailsToken(1);
  };

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
        onClick={ handleClick }
      >
        Enter
      </button>
    </form>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
