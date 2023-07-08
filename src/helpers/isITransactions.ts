import { ITransaction, ITransactions } from "../types/transactions";

function isITransaction(transaction: ITransaction): transaction is ITransaction {
  return (
    typeof transaction === "object" &&
    typeof transaction._id === "string" &&
    typeof transaction.owner === "string" &&
    typeof transaction.typeOperation === "string" &&
    typeof transaction.amount === "number" &&
    typeof transaction.category === "string" &&
    typeof transaction.comment === "string" &&
    typeof transaction.date === "string" &&
    typeof transaction.balanceAfterTransaction === "string" &&
    typeof transaction.createdAt === "string" &&
    typeof transaction.timestamps === "number"
  );
}

export function isITransactions(data: ITransactions): data is ITransactions {
  const isValidITransactions =
    typeof data === "object" &&
    Array.isArray(data.transactions) &&
    data.transactions.every(isITransaction) &&
    typeof data.userBalance === "number";

  return isValidITransactions;
}
