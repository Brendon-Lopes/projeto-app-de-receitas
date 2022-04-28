import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

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

      {search && (
        <section id="search">
          <input
            type="text"
            data-testid="search-input"
          />
          <div id="search-filter">
            <label htmlFor="ingredient">
              Ingredient
              <input
                type="radio"
                name="search"
                value="ingredient"
                data-testid="ingredient-search-radio"
              />
            </label>
            <label htmlFor="name">
              Name
              <input
                type="radio"
                name="search"
                value="name"
                data-testid="name-search-radio"
              />
            </label>
            <label htmlFor="first-letter">
              First letter
              <input
                type="radio"
                name="search"
                value="first-letter"
                data-testid="first-letter-search-radio"
              />
            </label>
          </div>
          <button type="button" data-testid="exec-search-btn">Search</button>
        </section>
      )}
    </header>
  );
}

Header.propTypes = {
  title: propTypes.string,
  visibleSearchIcon: propTypes.bool,
}.isRequired;

export default Header;
