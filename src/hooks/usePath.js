import { useLocation } from 'react-router-dom';

const usePath = () => {
  const { pathname } = useLocation();

  const routes = {
    '/foods': { id: 'idMeal', name: 'meals', title: 'Foods' },
    '/drinks': { id: 'idDrink', name: 'drinks', title: 'Drinks' },
  };

  return {
    pathname,
    routes,
    id: routes[pathname].id,
    name: routes[pathname].name,
    title: routes[pathname].title,
  };
};

export default usePath;
