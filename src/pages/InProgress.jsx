import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Figure } from 'react-bootstrap';
import useLocalStorage from '../hooks/useLocalStorage';
import usePath from '../hooks/usePath';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
import DetailsContext from '../context/detailsContext';

function InProgress() {
  const { id } = useParams();

  const { push } = useHistory();

  const { inProgressName,
    name, strNameThumb, strName, strCategory, type } = usePath();

  const inProgressDefaultValue = {
    cocktails: {},
    meals: {},
  };

  const [inProgressRecipes, setInProgressRecipes] = useLocalStorage(
    'inProgressRecipes', { ...inProgressDefaultValue, [inProgressName]: { [id]: [] } },
  );
  const [doneRecipesState, setDoneRecipesState] = useLocalStorage('doneRecipes', []);

  const { setName, setFoodId, foodDetails, foodIngredients } = useContext(DetailsContext);

  const [isFinishDisabled, setIsFinishDisabled] = useState(true);

  useEffect(() => {
    setName(name);
  }, [name, setName]);

  useEffect(() => {
    setFoodId(id);
  }, [setFoodId, id]);

  useEffect(() => {
    const ingredientsArray = foodIngredients
      .map(({ ingredient, measure }) => (
        { done: false, ingredient: `${ingredient}${measure}` }
      ));

    setInProgressRecipes((prevState) => (
      {
        ...prevState,
        [inProgressName]: // cocktails ou meals
        {
          ...prevState[inProgressName],
          [id]: prevState[inProgressName][id]?.length > 0
            ? [...prevState[inProgressName][id]] : ingredientsArray,
        },
      }
    ));
    // const recipes = { ...inProgressRecipes };

    // recipes[inProgressName][id] = recipes[inProgressName][id]?.length > 0
    //   ? recipes[inProgressName][id]
    //   : ingredientsArray;

    // setInProgressRecipes(recipes);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foodIngredients]);

  useEffect(() => {
    const arrayToCheck = inProgressRecipes[inProgressName][id];
    const condition = arrayToCheck ? arrayToCheck.every(({ done }) => done) : false;
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
    const date = new Date().toLocaleDateString();
    console.log(doneRecipesState);
    console.log(foodDetails);
    setDoneRecipesState((prevState) => ([
      ...prevState,
      { id,
        type,
        nationality: foodDetails.strArea,
        category: foodDetails[strCategory],
        alcoholicOrNot: foodDetails.strAlcoholic || '',
        name: foodDetails[strName],
        image: foodDetails[strNameThumb],
        doneDate: date,
        tags: foodDetails.strTags?.split(',') || [],
      },
    ]));
    console.log('saiu');
    push('/done-recipes');
  };

  return (
    <div>
      <Figure className="d-flex justify-content-center mb-0">
        <Figure.Image
          className="recipe-photo mb-0"
          data-testid="recipe-photo"
          src={ foodDetails[strNameThumb] }
          alt={ foodDetails[strName] }
        />
      </Figure>

      <div
        className="d-flex justify-content-between mx-0 px-2"
        style={ { backgroundColor: 'orange', border: 'none' } }
      >
        <h2 data-testid="recipe-title">{foodDetails[strName]}</h2>
        <div className="d-flex align-items-center">
          <ShareButton />

          <FavoriteButton />
        </div>
      </div>

      <p
        className="pl-3 fs-2 fw-bolder bg-warning"
        data-testid="recipe-category"
      >
        {foodDetails[strCategory]}

      </p>

      <h2 className="text-center mb-0">Ingredients</h2>
      <div className="text-center list-group">
        {inProgressRecipes[inProgressName][id]
          && inProgressRecipes[inProgressName][id].map(({ ingredient, done }, index) => (
            <label
              className="list-group-item"
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

      <h2 className="text-center mt-2 mb-4">Instructions</h2>
      <p className="p-2 mb-4" data-testid="instructions">{foodDetails.strInstructions}</p>

      <Button
        type="button"
        className="start-recipe-btn fixed-bottom"
        style={ { backgroundColor: '#704e2e', border: 'none' } }
        data-testid="finish-recipe-btn"
        disabled={ isFinishDisabled }
        onClick={ finishRecipe }
      >
        Finish Recipe
      </Button>

    </div>
  );
}

export default InProgress;
