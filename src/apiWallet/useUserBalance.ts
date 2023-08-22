import { useUser } from "../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { IBalance } from "../types/transactions";
import { getBalance } from "./balance";

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
  console.log("useUserBalance  data:", data.data);

  return data;
};
