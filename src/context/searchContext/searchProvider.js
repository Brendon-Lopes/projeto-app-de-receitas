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
  const [nationalityList, setNationalityList] = useState([]);

  async function getCategory() {
    const response = await fetchAPI.getDrinksCategory();
    const foodsResponse = await fetchAPI.getFoodsCategory();
    setDrinksCategoryList(response.drinks);
    setFoodsCategoryList(foodsResponse.meals);
  }

  async function getNationalityList() {
    const response = await fetchAPI.getNationality();
    setNationalityList(response);
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
    getNationalityList();
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
    nationalityList,
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
