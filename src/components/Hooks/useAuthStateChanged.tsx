import { useEffect } from 'react';
import { auth } from '../Firebase/config/firebase';

type OnChange = (isAuthenticated: boolean) => void;

export function useAuthStateChanged(onChange: OnChange) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const isAuthenticated = user !== null;
      onChange(isAuthenticated);
    });
    return unsubscribe;
  }, [onChange]);
}
