import React, { useContext } from 'react';
import propTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import DetailsContext from '../context/detailsContext/index';

function ShareButton({ dataTest, route }) {
  const { setCopyMessageVisible } = useContext(DetailsContext);

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
        width={ 30 }
        height={ 30 }
        src={ shareIcon }
        alt="share"
        role="presentation"
        data-testid={ dataTest || 'share-btn' }
        onClick={ handleShareClick }
      />
    </div>
  );
}

ShareButton.propTypes = {
  dataTest: propTypes.string,
}.isRequired;

export default ShareButton;
