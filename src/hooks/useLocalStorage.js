import { useState, useEffect } from "react";
import { useIsBrowser } from "./useIsBrowser";

export function useLocalStorage(key, initialValue) {
  const isBrowser = useIsBrowser();

  // Usar uma função para inicializar o estado
  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser) {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Função para atualizar o estado e localStorage
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (isBrowser) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
