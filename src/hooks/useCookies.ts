import { useState, Dispatch, SetStateAction } from 'react';

type UseCookieReturnType<T> = [T, Dispatch<SetStateAction<T>>, () => void];

const useCookies = <T>(cookieName: string, initialValue: T, expiresDays: number = 365): UseCookieReturnType<T> => {
  // Helper function to get the cookie value
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop()?.split(';').shift() as string);
    return null;
  };

  // Helper function to set the cookie
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
  };

  // Helper function to delete the cookie
  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=-99999999; path=/`;
  };

  // Get the initial value from the cookie or use the provided default value
  const getInitialValue = (): T => {
    const cookieValue = getCookie(cookieName);
    return cookieValue ? (JSON.parse(cookieValue) as T) : initialValue;
  };

  const [cookie, setCookieState] = useState<T>(getInitialValue);

  // Function to update the cookie value
  const updateCookie = (newValue: SetStateAction<T>) => {
    setCookieState((prevValue) => {
      const valueToStore = newValue instanceof Function ? newValue(prevValue) : newValue;
      setCookie(cookieName, JSON.stringify(valueToStore), expiresDays);
      return valueToStore;
    });
  };

  // Function to remove the cookie
  const removeCookie = () => {
    setCookieState(initialValue);
    deleteCookie(cookieName);
  };

  return [cookie, updateCookie, removeCookie];
};

export default useCookies;

