import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import * as fetchAPI from '../../services/fetchAPI';
import SearchContext from '.';

function SearchProvider({ children }) {
  const [selectedRadio, setSelectedRadio] = useState('ingredient');
  const [searchValue, setSearchValue] = useState('');
  const [apiData, setApiData] = useState([]);
  const [drinksList, setDrinksList] = useState([]);
  const [foodsList, setFoodsList] = useState([]);
  const [drinksCategoryList, setDrinksCategoryList] = useState([]);
  const [foodsCategoryList, setFoodsCategoryList] = useState([]);

  async function getCategory() {
    const response = await fetchAPI.getDrinksCategory();
    const foodsResponse = await fetchAPI.getFoodsCategory();
    setDrinksCategoryList(response.drinks);
    setFoodsCategoryList(foodsResponse.meals);
  }

  useEffect(() => {
    const drinksRecipes = async () => {
      const drinksResponse = await fetchAPI.getDrinksRecipes();
      const foodsResponse = await fetchAPI.getFoodRecipes();
      setDrinksList(drinksResponse);
      setFoodsList(foodsResponse);
    };
    drinksRecipes();
    getCategory();
  }, []);

  const value = {
    selectedRadio,
    setSelectedRadio,
    searchValue,
    setSearchValue,
    apiData,
    setApiData,
    drinksList,
    foodsList,
    setDrinksList,
    setFoodsList,
    drinksCategoryList,
    foodsCategoryList,
  };

  return (
    <SearchContext.Provider value={ value }>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default SearchProvider;
