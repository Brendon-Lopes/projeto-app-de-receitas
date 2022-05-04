import React, { useState, useEffect } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareButton() {
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
    copy(window.location.href);
    setCopyMessageVisible(true);
  };

  return (
    <div>
      <img
        src={ shareIcon }
        alt="share"
        role="presentation"
        data-testid="share-btn"
        onClick={ handleShareClick }
      />
      {copyMessageVisible && <p>Link copied!</p>}
    </div>
  );
}

export default ShareButton;
