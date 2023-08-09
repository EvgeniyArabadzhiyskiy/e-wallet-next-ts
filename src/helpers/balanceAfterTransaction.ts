import { ITransaction } from "../types/transactions";

export const balanceAfterTransaction = (transactions: ITransaction[], totalBalance: number) => {
  
  const balances = transactions.reduce(
    (acc, { amount, typeOperation }, idx) => {
      return [
        ...acc,
        typeOperation === "expense"
          ? (acc[idx] += amount)
          : (acc[idx] -= amount),
      ];
    },
    [totalBalance]
  );

  return balances;
};
