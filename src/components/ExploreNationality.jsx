import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from '../context/searchContext';
import * as fetchAPI from '../services/fetchAPI';

function ExploreNationality() {
  const { nationalityList, foodsList, setFoodsList } = useContext(SearchContext);

  const filterNationality = async (nationality) => {
    if (nationality !== 'All') {
      const allFoodsNAtionality = await fetchAPI.getNationalityFood(nationality);
      setFoodsList(allFoodsNAtionality);
    } else {
      const allFoods = await fetchAPI.getFoodRecipes();
      setFoodsList(allFoods);
    }
  };

  const maxNumber = 12;

  return (
    <div>

      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ (event) => filterNationality(event.target.value) }
      >
        <option
          data-testid="All-option"
          value="All"
        >
          All
        </option>
        {nationalityList.map((local, index) => (
          <option
            key={ index }
            data-testid={ `${local.strArea}-option` }
            value={ local.strArea }
          >
            {local.strArea}
          </option>
        ))}
      </select>

      {foodsList.length > 0 && foodsList
        .slice(0, maxNumber)
        .map((elem, index) => (
          <Link to={ `/foods/${elem.idMeal}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <p data-testid={ `${index}-card-name` }>{elem.strMeal}</p>
              <img
                src={ elem.strMealThumb }
                alt="recipe"
                data-testid={ `${index}-card-img` }
              />
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ExploreNationality;
