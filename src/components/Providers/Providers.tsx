"use client";

import { useEffect, useState } from "react";
import { MediaContextProvider } from "@/src/lib/media";
import { GlobalStyle } from "@/src/styles/theme/GlobalStyle";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { darkTheme, lightTheme } from "@/src/styles/theme/theme";

interface IProps {
  children?: React.ReactNode;
}

export const Providers = ({ children }: IProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const { theme } = useGlobalState();
 
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
