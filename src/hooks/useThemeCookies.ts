import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

export const useThemeCookies = () => {
  const [isLoading, setLoading] = useState(true);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const { theme: storedTheme } = parseCookies();

    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading && !theme) {
      return;
    }

    setCookie(null, "theme", `${theme}`, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }, [isLoading, theme]);

  return { isLoading, theme, setTheme };
};
