import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchContext from '../context/searchContext';
import { getFoodRecipes, fetchFoodsByCategory } from '../services/fetchAPI';

function FoodsResults() {
  const { foodsList, setFoodsList,
    foodsCategoryList } = useContext(SearchContext);

  const [filtered, setFiltered] = useState('');

  const maxNumber = 12;
  const MAX_CATEGORY = 5;

  const filterCategory = async (category) => {
    if (filtered !== category && category !== 'All') {
      const foodsByCategoryData = await fetchFoodsByCategory(category);
      setFoodsList(foodsByCategoryData);
      setFiltered(category);
    } else {
      const allFoods = await getFoodRecipes();
      setFoodsList(allFoods);
      setFiltered('');
    }
  };

  return (
    <main>
      <section>
        <ButtonGroup
          style={ { width: '100%' } }
          className="me-2"
          aria-label="First group"
        >
          <Button
            variant="secondary"
            type="button"
            data-testid="All-category-filter"
            value="All"
            onClick={ (event) => filterCategory(event.target.value) }
          >
            All
          </Button>
          {foodsCategoryList
            .slice(0, MAX_CATEGORY)
            .map((elem, index) => (
              <Button
                variant="secondary"
                key={ index }
                type="button"
                data-testid={ `${elem.strCategory}-category-filter` }
                value={ elem.strCategory }
                onClick={ (event) => filterCategory(event.target.value) }
              >
                {elem.strCategory}
              </Button>
            ))}
        </ButtonGroup>
      </section>

      {foodsList.length > 0 && foodsList
        .filter((_e, index) => index < maxNumber)
        .map(({ strMeal, strMealThumb, idMeal }, index) => (
          <Link to={ `/foods/${idMeal}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <p
                className="font-weight-bold text-monospace text-center shadow-sm"
                data-testid={ `${index}-card-name` }
              >
                {strMeal}
              </p>
              <Figure>
                <Figure.Image
                  className="rounded mx-auto d-block"
                  width={ 360 }
                  height={ 360 }
                  src={ strMealThumb }
                  alt="recipe"
                  data-testid={ `${index}-card-img` }
                />
              </Figure>
            </div>
          </Link>
        ))}
    </main>
  );
}

export default FoodsResults;
