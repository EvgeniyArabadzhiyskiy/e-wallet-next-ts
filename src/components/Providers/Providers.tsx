"use client";

import { useState } from "react";
import { MediaContextProvider } from "@/src/lib/media";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { darkTheme, lightTheme } from "@/src/styles/theme/theme";
import { trpc } from "@/src/trpc/client";
import { httpBatchLink } from "@trpc/client";

interface IProps {
  children?: React.ReactNode;
}

function Providers({ children }: IProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,

            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_URL}/api/trpc`,

          fetch(url, options) {
            return fetch(url, { ...options, credentials: "include" });
          },
        }),
      ],
    })
  );

  const { theme } = useGlobalState();

  // if (isLoading) {
  //   return <h1>Loading Theme..</h1>;
  // }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <MediaContextProvider disableDynamicMediaQueries>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              <SessionProvider>{children}</SessionProvider>
            </QueryClientProvider>
          </trpc.Provider>
        </MediaContextProvider>
      </ThemeProvider>
    </>
  );
}

export default Providers;
