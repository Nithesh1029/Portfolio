import { useEffect, useState } from 'react';

const STORAGE_KEY = 'nithesh-world-visited';

export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(STORAGE_KEY);
    if (!hasVisited) {
      setIsFirstVisit(true);
      sessionStorage.setItem(STORAGE_KEY, 'true');
    }
    setChecked(true);
  }, []);

  return { isFirstVisit, checked };
}