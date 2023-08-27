import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient(
   // {
  //     defaultOptions: {
  //       queries: {
  //         staleTime: Infinity,

  //         refetchOnMount: false,
  //         refetchOnReconnect: false,
  //         refetchOnWindowFocus: false,
  //         retry: 0,
  //       },
  //     },
  //   }
));
export default getQueryClient;
