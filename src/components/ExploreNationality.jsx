import React, { useContext } from 'react';
import { DropdownButton, Figure } from 'react-bootstrap';
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
      <DropdownButton
        className="font-weight-bold text-monospace shadow-sm"
        variant="success"
        title="Nationality"
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
      </DropdownButton>

      {foodsList.length > 0 && foodsList
        .slice(0, maxNumber)
        .map((elem, index) => (
          <Link to={ `/foods/${elem.idMeal}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <p
                className="font-weight-bold text-monospace text-center shadow-sm"
                data-testid={ `${index}-card-name` }
              >
                {elem.strMeal}
              </p>
              <Figure>
                <Figure.Image
                  className="rounded mx-auto d-block"
                  width={ 360 }
                  height={ 360 }
                  src={ elem.strMealThumb }
                  alt="recipe"
                  data-testid={ `${index}-card-img` }
                />
              </Figure>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ExploreNationality;
