"use client";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { walletTheme } from "@/src/styles/theme/theme";
import { trpc } from "@/src/trpc/client";
import { httpBatchLink } from "@trpc/client";
import { Toaster } from "sonner";

import { GoogleOAuthProvider } from "@react-oauth/google";

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
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <ThemeProvider theme={walletTheme}>
          <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </trpc.Provider>
        </ThemeProvider>
      </GoogleOAuthProvider>
      <Toaster position="top-center" richColors toastOptions={{style: {fontSize: "20px"}}} />
    </>
  );
}

export default Providers;
