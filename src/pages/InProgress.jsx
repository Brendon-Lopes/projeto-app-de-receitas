import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import usePath from '../hooks/usePath';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
import DetailsContext from '../context/detailsContext';

function InProgress() {
  const { id } = useParams();

  const { push } = useHistory();

  const { inProgressName, name, strNameThumb, strName, strCategory } = usePath();

  const inProgressDefaultValue = {
    cocktails: {},
    meals: {},
  };

  const [inProgressRecipes, setInProgressRecipes] = useLocalStorage(
    'inProgressRecipes', { ...inProgressDefaultValue, [inProgressName]: { [id]: [] } },
  );

  const { setName, setFoodId, foodDetails, foodIngredients } = useContext(DetailsContext);

  const [isFinishDisabled, setIsFinishDisabled] = useState(true);

  useEffect(() => {
    setName(name);
  }, [name, setName]);

  useEffect(() => {
    setFoodId(id);
  }, [setFoodId, id]);

  useEffect(() => {
    console.log('entrou aqui');
    const ingredientsArray = foodIngredients
      .map(({ ingredient, measure }) => (
        { done: false, ingredient: `${ingredient}${measure}` }
      ));

    setInProgressRecipes((prevState) => (
      {
        ...prevState,
        [inProgressName]:
        {
          ...prevState[inProgressName],
          [id]:
            [...prevState[inProgressName][id].length > 0
              ? [...prevState[inProgressName][id]] : ingredientsArray],
        },
      }
    ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foodIngredients]);

  useEffect(() => {
    const arrayToCheck = inProgressRecipes[inProgressName][id];
    const condition = arrayToCheck.every(({ done }) => done);
    setIsFinishDisabled(!condition);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inProgressRecipes]);

  const handleCheckboxChange = (ingredient) => {
    const updatedArray = inProgressRecipes[inProgressName][id]
      .map((curr) => (
        curr.ingredient === ingredient ? { ...curr, done: !curr.done } : curr
      ));

    setInProgressRecipes((prevState) => (
      {
        ...prevState,
        [inProgressName]:
          { ...prevState[inProgressName], [id]: updatedArray },
      }
    ));
  };

  const finishRecipe = () => {
    push('/done-recipes');
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ foodDetails[strNameThumb] }
        alt={ foodDetails[strName] }
      />

      <h2 data-testid="recipe-title">{foodDetails[strName]}</h2>

      <ShareButton />

      <FavoriteButton />

      <h2 data-testid="recipe-category">{foodDetails[strCategory]}</h2>

      <h2>Ingredients</h2>
      <div>
        {inProgressRecipes[inProgressName][id]
          && inProgressRecipes[inProgressName][id].map(({ ingredient, done }, index) => (
            <label
              key={ index }
              htmlFor={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                checked={ done }
                id={ index }
                onChange={ () => handleCheckboxChange(ingredient) }
              />
              {ingredient}
            </label>
          ))}
      </div>

      <h2>Instructions</h2>
      <p data-testid="instructions">{foodDetails.strInstructions}</p>

      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ isFinishDisabled }
        onClick={ finishRecipe }
      >
        Finish Recipe
      </button>

    </div>
  );
}

export default InProgress;
