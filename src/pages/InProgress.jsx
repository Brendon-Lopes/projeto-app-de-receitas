import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import usePath from '../hooks/usePath';
import { getFoodDetailsById, getDrinkDetailsById } from '../services/fetchAPI';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

function InProgress() {
  const { id } = useParams();

  const { inProgressName, name, strNameThumb, strName, strCategory } = usePath(); // cocktails ou meals

  const [inProgressRecipes] = useLocalStorage('inProgressRecipes', []);

  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = name === 'meals'
        ? await getFoodDetailsById(id) : await getDrinkDetailsById(id);
      setRecipeDetails(data);
    };
    fetchDetails();
  }, [name, id]);

  if (!inProgressRecipes[inProgressName][id]) return <p>Carregando...</p>;

  return (
    <div>
      InProgress
      <img
        data-testid="recipe-photo"
        src={ recipeDetails[strNameThumb] }
        alt={ recipeDetails[strName] }
      />

      <h2 data-testid="recipe-title">{recipeDetails[strName]}</h2>

      <ShareButton />

      <FavoriteButton />

      <h2 data-testid="recipe-category">{recipeDetails[strCategory]}</h2>

      <h2>Ingredients</h2>
      <div>
        {inProgressRecipes[inProgressName][id].map(({ ingredient }, index) => (
          <label key={ index } htmlFor={ index }>
            <input
              type="checkbox"
              id={ index }
            />
            {ingredient}
          </label>
        ))}
      </div>

      <h2>Instructions</h2>
      <p data-testid="instructions">{recipeDetails.strInstructions}</p>

      <button type="button" data-testid="finish-recipe-btn">Finish Recipe</button>

    </div>
  );
}

export default InProgress;
