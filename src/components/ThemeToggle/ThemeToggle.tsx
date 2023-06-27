"use client";

import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { useEffect, useState } from "react";

export const getStorageTheme = (key: string, initialValue: any) => {
  if (typeof window === "undefined") {
    return initialValue;
  }

  const userTheme = window.localStorage.getItem(key);

  return userTheme || initialValue;
};

export const useLocaleeStorage = (key: string, initialValue: any) => {
  const [storageItem, setStorageItem] = useState(getStorageTheme(key, initialValue));

  useEffect(() => {
    window.localStorage.setItem(key, storageItem);
  }, [key, storageItem]);

  return [storageItem, setStorageItem];
};

export default function ThemeToggle() {
  const { theme, setTheme } = useGlobalState();

//   const [theme1, setTheme1] = useLocaleeStorage("theme", "light");


  const onToggleTheme = () => {
    if (theme === "light") {
    //   setTheme1("dark");
      setTheme("dark");
    }

    if (theme === "dark") {
    //   setTheme1("light");
      setTheme("light");
    }
  };

  return (
    <>
      <button type="button" onClick={onToggleTheme}>
        Theme
      </button>
    </>
  );
}

//==========================================================
// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<string | null>(null);
//   console.log("ThemeToggle  theme:", theme);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedTheme = window.localStorage.getItem("theme");
//       if (storedTheme) {
//         setTheme(storedTheme);
//       } else {
//         setTheme("light");
//       }
//     }
//   }, []);

//   const onToggle = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined" && theme !== null) {
//       window.localStorage.setItem("theme", theme);
//     }
//   }, [theme]);

//   return (
//     <button type="button" onClick={onToggle}>
//       Theme
//     </button>
//   );
// }
