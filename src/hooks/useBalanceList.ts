import { useMemo } from "react";
import { balanceAfterTransaction } from "../helpers/balanceAfterTransaction";
import { useUserBalance } from "../apiWallet";
import { ITransaction } from "../types/transactions";

export const useBalanceList = (transactions: ITransaction[]) => {
  const { data: totalBalance } = useUserBalance();

  const balances = useMemo(() => {
    if (totalBalance !== undefined) {
      return balanceAfterTransaction(transactions, totalBalance);
    }
  }, [totalBalance, transactions]);

  return balances || [];
};
