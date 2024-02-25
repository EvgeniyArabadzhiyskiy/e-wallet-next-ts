import { useUser } from "../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { IBalance } from "../types/transactions";
import { getBalance } from "./balance";
import { trpc } from "../trpc/client";

export const useUserBalance = () => {
  const data = trpc.transactionRouter.getBalance.useQuery(undefined, {
    select: (data) => data.userBalance,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return data;
};

// export const useUserBalance = () => {
//   const { token } = useUser();

//   const data = useQuery<IBalance, Error, number, string[]>({
//     queryKey: ["Balance"],
//     queryFn: () => getBalance(token),
//     select: (data) => data.userBalance,

//     staleTime: Infinity,
//     refetchOnWindowFocus: false,
//     retry: 0,
//     enabled: !!token,
//   });

//   return data;
// };
