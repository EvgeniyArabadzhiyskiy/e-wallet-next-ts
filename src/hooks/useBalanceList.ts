import { useMemo } from "react";
import { balanceAfterTransaction } from "../helpers/balanceAfterTransaction";
import { useUserBalance } from "./useUserBalance";
import { ITransaction } from "../types/transactions";

export const useBalanceList = (transactions: ITransaction[]) => {

  const { data: totalBalance = 0 } = useUserBalance();

  const balances = useMemo(
    () => balanceAfterTransaction(transactions, totalBalance),
    [totalBalance, transactions]
  );

  return balances;
};
