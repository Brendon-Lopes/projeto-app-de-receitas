const fetchFoodAPI = async (option, input, type) => {
  const formattedInput = input.split(' ').join('_');

  const endpoints = {
    name: `search.php?s=${formattedInput}`,
    'first-letter': `search.php?f=${formattedInput}`,
    ingredient: `filter.php?i=${formattedInput}`,
  };

  const url = {
    '/foods': `https://www.themealdb.com/api/json/v1/1/${endpoints[option]}`,
    '/drinks': `https://www.thecocktaildb.com/api/json/v1/1/${endpoints[option]}`,
  };

  try {
    console.log(url[type]);
    const response = await fetch(url[type]);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchFoodAPI;
