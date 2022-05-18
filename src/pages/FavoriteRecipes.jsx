import React, { useContext, useState, useEffect } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';
import Context from '../context/generalContext/context';

function FavoriteRecipes() {
  const { favoriteRecipes } = useContext(Context);

  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    setFilteredRecipes(favoriteRecipes);
  }, [favoriteRecipes]);

  const favoritesFilter = (filterType) => {
    const filtered = favoriteRecipes.filter(({ type }) => type === filterType);
    setFilteredRecipes(filtered);
  };

  const resetFilter = () => {
    setFilteredRecipes(favoriteRecipes);
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
      <section>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ resetFilter }
        >
          All
        </button>

        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => favoritesFilter('food') }
        >
          Food
        </button>

        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => favoritesFilter('drink') }
        >
          Drinks
        </button>
      </section>
      <section>
        {filteredRecipes.length > 0 && filteredRecipes.map((data, index) => (
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
