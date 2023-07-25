import { ITransaction } from "../types/transactions";

export const balanceAfterTransaction = (data: ITransaction[], totalBalance: number) => {
  // нужно сделать проверку тиров data: ITransaction[], totalBalance: number
  
  const balances = data.reduce(
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
  console.log("balanceAfterTransaction  balances:", balances);

  return balances;
};
