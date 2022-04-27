import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import foodIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/drink">
        <img
          src={ drinkIcon }
          alt="drinks"
          role="presentation"
          data-testid="drinks-bottom-btn"
        />
      </Link>

      <Link to="/explore">
        <img
          src={ exploreIcon }
          alt="explore"
          role="presentation"
          data-testid="explore-bottom-btn"
        />
      </Link>

      <Link to="/food">
        <img
          src={ foodIcon }
          alt="food"
          role="presentation"
          data-testid="food-bottom-btn"
        />
      </Link>

    </footer>
  );
}

export default Footer;
