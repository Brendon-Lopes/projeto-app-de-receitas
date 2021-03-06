import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import foodIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container" data-testid="footer">
      <Link to="/drinks">
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

      <Link to="/foods">
        <img
          src={ foodIcon }
          alt="foods"
          role="presentation"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
