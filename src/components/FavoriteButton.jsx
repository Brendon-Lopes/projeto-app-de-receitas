import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFoodDetailsById, getDrinkDetailsById } from '../services/fetchAPI';
import usePath from '../hooks/usePath';
import useLocalStorage from '../hooks/useLocalStorage';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ShareAndFavorites() {
  const { type, strName, strNameThumb } = usePath();

  const { id } = useParams();

  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage('favoriteRecipes', []);

  const [isRecipeFavorite, setIsRecipeFavorite] = useState(false);

  useEffect(() => {
    const isItFavorite = favoriteRecipes.some(({ id: recipeId }) => recipeId === id);
    setIsRecipeFavorite(isItFavorite);
  }, [favoriteRecipes, id]);

  useEffect(() => {
    if (isRecipeFavorite) {
      (async () => {
        const data = type === 'food'
          ? await getFoodDetailsById(id)
          : await getDrinkDetailsById(id);

        const newFavoriteObject = {
          id,
          type,
          nationality: data.strArea || '',
          category: data.strCategory || '',
          alcoholicOrNot: data.strAlcoholic || '',
          name: data[strName],
          image: data[strNameThumb],
        };
        setFavoriteRecipes((prevState) => [...prevState, newFavoriteObject]);
      })();
    } else {
      setFavoriteRecipes((prevState) => prevState.filter((recipe) => recipe.id !== id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecipeFavorite]);

  const handleFavoriteClick = async () => {
    if (isRecipeFavorite) setIsRecipeFavorite(false);
    else setIsRecipeFavorite(true);
  };

  return (
    <img
      src={ isRecipeFavorite ? blackHeartIcon : whiteHeartIcon }
      alt="favorite"
      role="presentation"
      data-testid="favorite-btn"
      onClick={ handleFavoriteClick }
    />
  );
}

export default ShareAndFavorites;
