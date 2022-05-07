import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import propTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareFavoriteButton({ type, id, index }) {
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  useEffect(() => {
    if (copyMessageVisible) {
      const TIME_LIMIT = 3000;
      const timeOut = setTimeout(() => {
        setCopyMessageVisible(false);
      }, TIME_LIMIT);
      return function cleanUp() {
        clearTimeout(timeOut);
      };
    }
  }, [copyMessageVisible]);

  const handleShareClick = () => {
    const url = `${window.location.origin}/${type}/${id}`;
    copy(url);
    setCopyMessageVisible(true);
  };

  return (
    <div>
      <img
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="share"
        role="presentation"
        onClick={ handleShareClick }
      />
      {copyMessageVisible && <p>Link copied!</p>}
    </div>
  );
}

ShareFavoriteButton.propTypes = {
  type: propTypes.string,
  id: propTypes.string,
  index: propTypes.number,
}.isRequired;

export default ShareFavoriteButton;
