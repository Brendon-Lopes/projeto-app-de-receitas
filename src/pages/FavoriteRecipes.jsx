import React from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';
import useLocalStorage from '../hooks/useLocalStorage';

function FavoriteRecipes() {
  const [favoriteRecipes] = useLocalStorage('favoriteRecipes', []);

  return (
    <div>
      {console.log(favoriteRecipes)}
      <Header title="Favorite Recipes" />
      <section>
        <button
          data-testid="filter-by-all-btn"
          type="button"
        >
          All
        </button>

        <button
          data-testid="filter-by-food-btn"
          type="button"
        >
          Food
        </button>

        <button
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks
        </button>
      </section>
      <section>
        {favoriteRecipes.length > 0 && favoriteRecipes.map((data, index) => (
          <FavoriteCard
            key={ data.id }
            data={ data }
            index={ index }
          />
        ))}
      </section>
    </div>
  );
}

export default FavoriteRecipes;
