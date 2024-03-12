import { ITransaction } from "../types/transactions";

export const balanceAfterTransaction = (transactions: ITransaction[], totalBalance: number) => {
  const balances = transactions.reduce(
    (acc, { amount }, idx) => {
      return [
        ...acc,
        acc[idx] -= amount,                                                                   
      ];
    },
    [totalBalance]
  );

  return balances;
};
