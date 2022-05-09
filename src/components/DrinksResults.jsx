import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchContext from '../context/searchContext';
import { fetchDrinksByCategory, getDrinksRecipes } from '../services/fetchAPI';

function DrinksResults() {
  const { drinksList, setDrinksList,
    drinksCategoryList } = useContext(SearchContext);

  const [filtered, setFiltered] = useState('');

  const maxNumber = 12;
  const MAX_CATEGORY = 5;

  const filterCategory = async (category) => {
    if (filtered !== category && category !== 'All') {
      const drinksByCategoryData = await fetchDrinksByCategory(category);
      setDrinksList(drinksByCategoryData);
      setFiltered(category);
    } else {
      const allDrinks = await getDrinksRecipes();
      setDrinksList(allDrinks);
      setFiltered('');
    }
  };

  return (
    <main>
      <section>
        <ButtonGroup
          style={ { width: '130%' } }
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
          {drinksCategoryList
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

      {drinksList.length > 0 && drinksList
        .filter((_e, index) => index < maxNumber)
        .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
          <Link to={ `/drinks/${idDrink}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <p
                data-testid={ `${index}-card-name` }
                className="font-weight-bold text-monospace text-center shadow-sm"
              >
                {strDrink}
              </p>
              <Figure.Image
                className="rounded mx-auto d-block"
                width={ 360 }
                height={ 360 }
                src={ strDrinkThumb }
                alt="recipe"
                data-testid={ `${index}-card-img` }
              />
            </div>
          </Link>
        ))}
    </main>
  );
}

export default DrinksResults;
