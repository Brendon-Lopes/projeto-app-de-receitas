import { useLocation } from 'react-router-dom';

const usePath = () => {
  const { pathname } = useLocation();

  const routes = {
    '/foods': { id: 'idMeal', name: 'meals' },
    '/drinks': { id: 'idDrink', name: 'drinks' },
  };

  return {
    pathname,
    routes,
    id: routes[pathname].id,
    name: routes[pathname].name,
  };
};

export default usePath;
