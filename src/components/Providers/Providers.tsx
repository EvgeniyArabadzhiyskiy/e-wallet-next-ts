"use client";

import { useEffect, useState } from "react";
import { MediaContextProvider } from "@/src/lib/media";
import { GlobalStyle } from "@/src/styles/theme/GlobalStyle";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { darkTheme, lightTheme } from "@/src/styles/theme/theme";
import { setCookie } from "nookies";

interface IProps {
  children?: React.ReactNode;
}

export const Providers = ({ children }: IProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const { isLoading, theme } = useGlobalState();

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTM0ZGFhMTQyNGVhZDExNWVhNTJhNSIsImlhdCI6MTY4ODQwNTUyNiwiZXhwIjoxNjg5NjE1MTI2fQ.nTUHoyF8mdoMniLDqUw5ZphOVBqWFWx4thg-DM3dVhg";
  // setCookie(null, "authToken", `${token}`, {
  //   maxAge: 30 * 24 * 60 * 60,
  //   path: "/",
  // });

  // if (isLoading) {
  //   return <h1>Loading Theme..</h1>;
  // }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <MediaContextProvider disableDynamicMediaQueries>
          <QueryClientProvider client={queryClient}>
            <SessionProvider>{children}</SessionProvider>
          </QueryClientProvider>
        </MediaContextProvider>
      </ThemeProvider>
      {/* <GlobalStyle /> */}
    </>
  );
};
