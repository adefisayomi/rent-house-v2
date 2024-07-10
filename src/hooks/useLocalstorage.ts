import { useState, useEffect, Dispatch, SetStateAction, useLayoutEffect } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export default function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageReturnType<T> {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      // Only update state if storedValue differs from current value or defaultValue changes
      if (storedValue && JSON.stringify(value) !== storedValue) {
        setValue(JSON.parse(storedValue));
      } else if (!storedValue && defaultValue !== value) {
        setValue(defaultValue);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, defaultValue]); // Remove defaultValue from the dependency array

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
