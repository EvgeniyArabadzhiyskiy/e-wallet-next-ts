"use client";

import React from "react";
import { MediaContextProvider } from "@/src/lib/media";
import { dayTheme } from "@/src/styles/theme/theme";
import { GlobalStyle } from "@/src/styles/theme/GlobalStyle";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalProvider from "../GlobalProvider/GlobalProvider";

interface IProps {
  children?: React.ReactNode;
}

export const Providers = ({ children }: IProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <ThemeProvider theme={dayTheme}>
        <MediaContextProvider disableDynamicMediaQueries>
          <GlobalProvider>
            <QueryClientProvider client={queryClient}>
              <SessionProvider>{children}</SessionProvider>
            </QueryClientProvider>
          </GlobalProvider>
        </MediaContextProvider>
      </ThemeProvider>
      {/* <GlobalStyle /> */}
    </>
  );
};
