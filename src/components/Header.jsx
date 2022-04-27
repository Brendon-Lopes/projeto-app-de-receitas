import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ history, title, visibleSearchIcon }) {
  const [search, setSearch] = useState(false);

  const handleClick = () => {
    history.push('/profile');
  };

  const showSearchBar = () => {
    setSearch(!search);
  };

  return (
    <header>
      <Link to="/profile">
        <img
          src={ profileIcon }
          alt="search"
          onClick={ handleClick }
          role="presentation"
          data-testid="profile-top-btn"
        />
      </Link>

      <h1 data-testid="page-title">{title}</h1>

      {visibleSearchIcon && (
        <img
          src={ searchIcon }
          alt="search"
          onClick={ showSearchBar }
          role="presentation"
          data-testid="search-top-btn"
        />
      )}

      {search && (
        <input
          type="text"
          data-testid="search-input"
        />
      )}
    </header>
  );
}

Header.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
}.isRequired;

export default Header;
