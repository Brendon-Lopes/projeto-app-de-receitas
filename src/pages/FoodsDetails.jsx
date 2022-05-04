import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import usePath from '../hooks/usePath';
import DetailsContext from '../context/detailsContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { getDrinksRecipes, getFoodRecipes } from '../services/fetchAPI';
import RecomendationCard from '../components/RecomendationCard';
import useLocalStorage from '../hooks/useLocalStorage';
import './FoodsDetails.css';

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
    strNameI, strNameThumbI, strCategoryI, literalName,
    inProgressName } = usePath();

  const { id } = useParams();
  const { push } = useHistory();

  const { setFoodId,
    foodDetails,
    foodIngredients,
    setName } = useContext(DetailsContext);

  const [recomendations, setRecomendations] = useState([]);
  const [buttonText, setButtonText] = useState('');
  const [isRecipeDone, setIsRecipeDone] = useState(false);

  useEffect(() => {
    if (inProgressRecipes[inProgressName][id]) {
      setButtonText('Continue Recipe');
    } else {
      setButtonText('Start Recipe');
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

  if (!foodDetails[strName]) return <h2>Carregando...</h2>;

  return (
    <div>
      <img
        className="recipe-photo"
        data-testid="recipe-photo"
        src={ foodDetails[strNameThumb] }
        alt={ foodDetails[strName] }
      />
      <h2 data-testid="recipe-title">{foodDetails[strName]}</h2>
      <section>
        <img
          src={ shareIcon }
          alt="share"
          role="presentation"
          data-testid="share-btn"
        />
        <img
          src={ whiteHeartIcon }
          alt="favorite"
          role="presentation"
          data-testid="favorite-btn"
        />
      </section>
      <h2 data-testid="recipe-category">{foodDetails[strCategory]}</h2>

      <h2>Ingredients</h2>
      <ul>
        {foodIngredients.map(({ ingredient, measure }, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {`${ingredient} - ${measure}`}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p data-testid="instructions">{foodDetails.strInstructions}</p>

      {name === 'meals' && (
        <div>
          <h2>Video</h2>
          <YoutubeEmbed embedId={ foodDetails.strYoutube.split('=')[1] } />
        </div>
      )}

      <h3>Receitas recomendadas</h3>
      <section className="carousel">
        {recomendations.map((rec, index) => (
          <RecomendationCard
            key={ index }
            imgSrc={ rec[strNameThumbI] }
            category={ rec[strCategoryI] }
            name={ rec[strNameI] }
            index={ index }
          />
        ))}
      </section>

      {!isRecipeDone && (
        <button
          className="start-recipe-btn"
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => push(`/${literalName}/${id}/in-progress`) }
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default FoodDetails;
