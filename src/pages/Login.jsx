import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import Context from '../context/generalContext/context';
import useLocalStorage from '../hooks/useLocalStorage';
import './login.css';

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
    <div className="Login">
      <p className="text-success mt-3 p-1 text-left">
        Bem vindo ao
      </p>
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
        App de Receitas
      </h1>
      <form>
        <h2
          className="text-success mt-5 p-3 text-center rounded"
        >
          Login

        </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            data-testid="email-input"
            type="text"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ changeEmail }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ changePassword }
          />
        </Form.Group>

        <div className="d-grid text-center rounded">
          <Button
            variant="success"
            data-testid="login-submit-btn"
            type="button"
            disabled={ isDisabled }
            onClick={ handleClick }
          >
            Enter
          </Button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Login;
