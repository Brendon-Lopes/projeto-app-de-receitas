import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Figure } from 'react-bootstrap';
import usePath from '../hooks/usePath';
import DetailsContext from '../context/detailsContext';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { getDrinksRecipes, getFoodRecipes } from '../services/fetchAPI';
import RecomendationCard from '../components/RecomendationCard';
import useLocalStorage from '../hooks/useLocalStorage';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';

function FoodDetails() {
  const inProgressDefaultValue = {
    cocktails: {},
    meals: {},
  };

  const [doneRecipes] = useLocalStorage('doneRecipes', []);
  const [inProgressRecipes] = useLocalStorage(
    'inProgressRecipes', inProgressDefaultValue,
  );

  const { name, strName, strNameThumb, strCategory,
    literalName,
    inProgressName } = usePath();

  const { id } = useParams();
  const { push } = useHistory();

  const { setFoodId,
    foodDetails,
    foodIngredients,
    setName,
    copyMessageVisible,
    setCopyMessageVisible } = useContext(DetailsContext);

  const [recomendations, setRecomendations] = useState([]);
  const [buttonText, setButtonText] = useState('');
  const [isRecipeDone, setIsRecipeDone] = useState(false);
  // const [isRecipeInProgress, setIsRecipeInProgress] = useState(false);

  useEffect(() => {
    if (inProgressRecipes[inProgressName][id]) {
      setButtonText('Continue Recipe');
      // setIsRecipeInProgress(true);
    } else {
      setButtonText('Start Recipe');
      // setIsRecipeInProgress(false);
    }
  }, [id, inProgressName, inProgressRecipes]);

  useEffect(() => {
    const checkIfDone = doneRecipes.some(({ id: recipeId }) => recipeId === id);
    setIsRecipeDone(checkIfDone);
  }, [doneRecipes, id]);

  useEffect(() => {
    setName(name);
  }, [name, setName]);

  useEffect(() => {
    setFoodId(id);
  }, [setFoodId, id]);

  useEffect(() => {
    const fetchRecomendations = async () => {
      const MAX_NUMBER = 6;
      const data = name === 'meals' ? await getDrinksRecipes() : await getFoodRecipes();
      const filteredRecomendations = data.filter((_e, index) => index < MAX_NUMBER);
      setRecomendations(filteredRecomendations);
    };
    fetchRecomendations();
  }, [name]);

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

  const goToInProgress = () => {
    // if (!isRecipeInProgress) {
    //   const ingredientsArray = foodIngredients
    //     .map(({ ingredient, measure }) => (
    //       { done: false, ingredient: `${ingredient}${measure}` }
    //     ));

    //   setInProgressRecipes((prevState) => (
    //     {
    //       ...prevState,
    //       [inProgressName]:
    //         { ...prevState[inProgressName], [id]: ingredientsArray },
    //     }
    //   ));
    // }

    push(`/${literalName}/${id}/in-progress`);
  };

  if (!foodDetails[strName]) return <h2>Carregando...</h2>;

  return (
    <div>
      <Figure className="mb-0">
        <Figure.Image
          className="recipe-photo mb-0"
          data-testid="recipe-photo"
          src={ foodDetails[strNameThumb] }
          alt={ foodDetails[strName] }
        />
      </Figure>
      <div
        className="container d-flex justify-content-between"
        style={ { backgroundColor: 'orange', border: 'none' } }
      >
        <h2 data-testid="recipe-title">{foodDetails[strName]}</h2>
        <div className="d-flex">
          {copyMessageVisible && <p>Link copied!</p>}
          <ShareButton />
          <FavoriteButton />
        </div>
      </div>

      <p
        data-testid="recipe-category"
        className="pl-3 fs-2 fw-bolder bg-warning"
      >
        {foodDetails[strCategory]}

      </p>
      <h2
        className="text-center mb-0"
      >
        Ingredients

      </h2>
      <ul
        style={ { backgroundColor: 'secondary' } }
        className="text-center list-group "
      >
        {foodIngredients.map(({ ingredient, measure }, index) => (
          <li
            className="list-group-item"
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {ingredient}
            {measure}
          </li>
        ))}
      </ul>

      <h2
        className="text-center mt-2 mb-0"
      >
        Instructions

      </h2>
      <p
        className="p-2 "
        data-testid="instructions"
      >
        {foodDetails.strInstructions}

      </p>

      {name === 'meals' && (
        <div>
          <h2 className="text-center">Video</h2>
          <div className="d-flex justify-content-center">
            <YoutubeEmbed embedId={ foodDetails.strYoutube.split('=')[1] } />

          </div>
        </div>
      )}

      <h3 className="text-center my-3">Receitas recomendadas</h3>
      <section>
        <RecomendationCard
          data={ recomendations }
        />

      </section>

      {!isRecipeDone && (
        <Button
          size="lg"
          className="start-recipe-btn fixed-bottom mt-2"
          style={ { backgroundColor: '#704e2e', border: 'none' } }
          data-testid="start-recipe-btn"
          type="button"
          onClick={ goToInProgress }
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default FoodDetails;
