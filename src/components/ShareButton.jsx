import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ dataTest, route }) {
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
    const url = window.location.href;
    const urlArray = url.split('/');
    const newUrl = `${urlArray[0]}//${urlArray[2]}/${urlArray[3]}/${urlArray[4]}`;
    if (route) {
      copy(`http://localhost:3000/${route}`);
    } else {
      copy(newUrl);
    }
    setCopyMessageVisible(true);
  };

  return (
    <div>
      <img
        src={ shareIcon }
        alt="share"
        role="presentation"
        data-testid={ dataTest || 'share-btn' }
        onClick={ handleShareClick }
      />
      {copyMessageVisible && <p>Link copied!</p>}
    </div>
  );
}

ShareButton.propTypes = {
  dataTest: propTypes.string,
}.isRequired;

export default ShareButton;
