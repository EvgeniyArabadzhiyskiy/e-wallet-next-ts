"use client";

import { MediaContextProvider } from "@/lib/media";
import { GlobalStyle } from "@/styles/theme/GlobalStyle";
import { dayTheme } from "@/styles/theme/theme";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";

interface IProps {
  children?: React.ReactNode;
}

export const Providers = ({ children }: IProps) => {
  return (
    <>
      <MediaContextProvider disableDynamicMediaQueries>
        <ThemeProvider theme={dayTheme}>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </MediaContextProvider>
      {/* <GlobalStyle /> */}
    </>
  );
};
