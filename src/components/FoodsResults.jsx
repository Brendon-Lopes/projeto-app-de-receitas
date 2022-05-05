import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
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
          <Card style={ { width: '20rem' } } key={ index }>
            <Link to={ `/foods/${idMeal}` }>
              <div data-testid={ `${index}-recipe-card` }>
                <Card.Header data-testid={ `${index}-card-name` }>
                  {strMeal}
                </Card.Header>
                <Card.Img
                  variant="top"
                  width="300px"
                  src={ strMealThumb }
                  alt="recipe"
                  data-testid={ `${index}-card-img` }
                />
              </div>
            </Link>
          </Card>
        ))}
    </main>
  );
}

export default FoodsResults;
