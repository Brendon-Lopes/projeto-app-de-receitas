import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import DetailsContext from '.';
import { getFoodDetailsById, getDrinkDetailsById } from '../../services/fetchAPI';

function DetailsProvider({ children }) {
  const [foodId, setFoodId] = useState(0);
  const [foodDetails, setFoodDetails] = useState({});
  const [foodIngredients, setFoodIngredients] = useState([]);
  const [name, setName] = useState('');
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  useEffect(() => {
    if (foodId !== 0) {
      const getDetails = async () => {
        const details = name === 'meals'
          ? await getFoodDetailsById(foodId)
          : await getDrinkDetailsById(foodId);
        setFoodDetails(details);
      };
      getDetails();
    }
  }, [name, foodId]);

  const value = {
    foodDetails,
    setFoodDetails,
    foodId,
    setFoodId,
    foodIngredients,
    setFoodIngredients,
    setName,
    copyMessageVisible,
    setCopyMessageVisible,
  };

  useEffect(() => {
    const foodDetailsEntries = Object.entries(foodDetails);

    const filteredIngredients = foodDetailsEntries
      .filter((arr) => arr[0].includes('strIngredient'))
      .filter((arr) => arr[1]);

    const filteredMeasures = foodDetailsEntries
      .filter((arr) => arr[0].includes('strMeasure'))
      .filter((arr) => arr[1]);

    const ingredientsWithMeasures = filteredIngredients
      .reduce((acc, curr, index) => (
        [...acc, {
          ingredient: curr[1],
          measure: (filteredMeasures[index] && ` - ${filteredMeasures[index][1]}`) || '',
        }]), []);

    setFoodIngredients(ingredientsWithMeasures);
  }, [foodDetails]);

  return (
    <DetailsContext.Provider value={ value }>
      {children}
    </DetailsContext.Provider>
  );
}

DetailsProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default DetailsProvider;
