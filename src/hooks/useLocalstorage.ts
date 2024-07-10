import { useState, useEffect, Dispatch, SetStateAction, useLayoutEffect } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export default function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageReturnType<T> {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
      } catch (error) {
        console.error(`Error parsing localStorage item "${key}":`, error);
        return defaultValue;
      }
    }
    return defaultValue;
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedValue = window.localStorage.getItem(key);
        if (storedValue && JSON.stringify(value) !== storedValue) {
          setValue(JSON.parse(storedValue));
        } else if (!storedValue && defaultValue !== value) {
          setValue(defaultValue);
        }
      } catch (error) {
        console.error(`Error parsing localStorage item "${key}" in useLayoutEffect:`, error);
      }
    }
  }, [key]); // Remove defaultValue from the dependency array

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
