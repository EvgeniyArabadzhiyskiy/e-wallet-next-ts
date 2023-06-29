"use client";

import { useGlobalState } from "../GlobalProvider/GlobalProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useGlobalState();

  const onToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button type="button" onClick={onToggleTheme}>
        Theme
      </button>
    </>
  );
}
