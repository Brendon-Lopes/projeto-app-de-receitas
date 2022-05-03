import { useLocation } from 'react-router-dom';

const usePath = () => {
  const { pathname } = useLocation();

  const returnFoodOrDrink = (foods, drinks) => (
    pathname.includes('/foods') ? foods : drinks);

  return {
    pathname,
    id: returnFoodOrDrink('idMeal', 'idDrink'),
    name: returnFoodOrDrink('meals', 'drinks'),
    strName: returnFoodOrDrink('strMeal', 'strDrink'),
    strNameI: returnFoodOrDrink('strDrink', 'strMeal'),
    strNameThumb: returnFoodOrDrink('strMealThumb', 'strDrinkThumb'),
    strNameThumbI: returnFoodOrDrink('strDrinkThumb', 'strMealThumb'),
    strCategory: returnFoodOrDrink('strCategory', 'strAlcoholic'),
    strCategoryI: returnFoodOrDrink('strAlcoholic', 'strCategory'),
  };
};

export default usePath;
