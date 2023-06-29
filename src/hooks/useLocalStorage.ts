import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export const getStorageTheme = (key: string, initialValue: string) => {
  if (typeof window === "undefined") {
    return initialValue;
  }

  const userTheme = window.localStorage.getItem(key);

  return userTheme || initialValue;
};

export const useLocalStorage = (key: string, initialValue: string) => {
  const { theme } = parseCookies();
  const [storageItem, setStorageItem] = useState(
    getStorageTheme(key, initialValue)
  );

  useEffect(() => {
    window.localStorage.setItem(key, storageItem);
  }, [key, storageItem]);

  return { storageItem, setStorageItem };
};
