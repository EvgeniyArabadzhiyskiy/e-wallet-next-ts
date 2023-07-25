import { useUser } from "./useUser";
import { useQuery } from "@tanstack/react-query";
import { getBalance } from "../helpers/getBalance";
import { IBalance } from "../types/transactions";

export const useUserBalance = () => {
  const { token } = useUser();

  const data = useQuery<IBalance, Error, number, string[]>({
    queryKey: ["Balance"],
    queryFn: () => getBalance(token), // ИЛИ authToken
    select: (data) => data.userBalance,

    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!token,
  });

  return data;
};
