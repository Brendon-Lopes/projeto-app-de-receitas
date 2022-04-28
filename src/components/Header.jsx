import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, visibleSearchIcon }) {
  const [search, setSearch] = useState(false);

  const showSearchBar = () => {
    setSearch(!search);
  };

  return (
    <header>
      <Link to="/profile">
        <img
          src={ profileIcon }
          alt="search"
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

      {search && <SearchBar />}
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string,
  visibleSearchIcon: propTypes.bool,
}.isRequired;

export default Header;
