import prisma from "../../lib/prismaClient";
import { TRPCError } from "@trpc/server";
import { getAllTransactions } from "./getAllTransactions";
import { type TDeleteTransactionValues } from "@/src/helpers/inputSchemas";

export const deleteTransaction = async (
  userID: string,
  { transactionID, lastPageNumber }: TDeleteTransactionValues
) => {
  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const remoteTransaction = await prisma.transaction.delete({
    where: {
      owner: user.id,
      id: transactionID,
    },
  });

  const { amount } = remoteTransaction;
  const newBalance = user.balance - amount;

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },

    data: {
      balance: newBalance,
    },
  });

  const limit = 10;
  const page = lastPageNumber;
  const skip = (page - 1) * limit;

  const { transactions } = await getAllTransactions(userID, limit, skip);
  const latestTransaction = transactions.pop();

  return {
    remoteTransaction: {
      ...remoteTransaction,
      timestamps: remoteTransaction.timestamps.toString(),
    },
    latestTransaction,
  };
};
