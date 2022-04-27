import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Estado para guardar nosso valor
  // Passe uma função de estado inicial para o useState pra lógica ser executada apenas uma vez
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Recuperar do localstorage pela key
      const item = window.localStorage.getItem(key);
      // Parse o json guardado, se não tiver nenhum retorne o estado inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se der erro retorne o estado inicial
      console.log(error);
      return initialValue;
    }
  });
  // Retorna uma versão 'encapsulada' do setter do useState que persiste o novo valor no localstorage
  const setValue = (value) => {
    try {
      // permitir o valor ser uma função pra termos a mesma API do useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Salva o estado
      setStoredValue(valueToStore);
      // Salva no localstorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Uma implementação mais avançada gerenciaria o caso de erro
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
