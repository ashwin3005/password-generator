import { useState, useEffect } from 'react';

export function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const persistedState = localStorage.getItem(key);

    return persistedState ? JSON.parse(persistedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
