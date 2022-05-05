import React from 'react';
import { useParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import usePath from '../hooks/usePath';

function InProgress() {
  const { id } = useParams();

  const { inProgressName } = usePath(); // cocktails ou meals

  const [inProgressRecipes] = useLocalStorage('inProgressRecipes', []);

  if (!inProgressRecipes[inProgressName][id]) return <p>Carregando...</p>;

  return (
    <div>
      InProgress
      {console.log(inProgressRecipes[inProgressName][id])}
    </div>
  );
}

export default InProgress;
