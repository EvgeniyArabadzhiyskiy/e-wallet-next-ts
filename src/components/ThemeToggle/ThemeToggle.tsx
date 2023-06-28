"use client";

import { parseCookies, setCookie } from "nookies";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { useEffect, useState } from "react";

export const getStorageTheme = (key: string, initialValue: string) => {
  if (typeof window === "undefined") {
    return initialValue;
  }

  const userTheme = window.localStorage.getItem(key);

  return userTheme || initialValue;
};

export const useLocalStorage = (key: string, initialValue: string) => {
  const {theme} = parseCookies()
  const [storageItem, setStorageItem] = useState(getStorageTheme(key, initialValue));

  useEffect(() => {
    window.localStorage.setItem(key, storageItem);
  }, [key, storageItem]);

  return {storageItem, setStorageItem};
};

export const useCookies = () => {
  const { theme } = parseCookies()
  const [storageItem, setStorageItem] = useState(theme);

  useEffect(() => {
    setCookie(null, "theme", `${storageItem}`, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }, [storageItem]);

  return {storageItem, setStorageItem};
};

export default function ThemeToggle() {
  const { theme, setTheme } = useGlobalState();

  const onToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")

    // if (theme === "light") {
    //   // setStorageItem("dark");
    //   setTheme("dark");
    // }

    // if (theme === "dark") {
    //   // setStorageItem("light");
    //   setTheme("light");
    // }
  };

  return (
    <>
      <button type="button" onClick={onToggleTheme}>
        Theme
      </button>
    </>
  );
}


