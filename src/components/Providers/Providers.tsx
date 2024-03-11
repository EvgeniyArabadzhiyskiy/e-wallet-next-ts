"use client";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { walletTheme } from "@/src/styles/theme/theme";
import { trpc } from "@/src/trpc/client";
import { httpBatchLink } from "@trpc/client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { SessionProvider } from "next-auth/react";

const clientId =
  "259286260568-kl6201hqpnakfuu3e8uk4riuojbodkkb.apps.googleusercontent.com";

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

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        {/* <SessionProvider> */}
        <ThemeProvider theme={walletTheme}>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </trpc.Provider>
        </ThemeProvider>
        {/* </SessionProvider> */}
      </GoogleOAuthProvider>
    </>
  );
}

export default Providers;
