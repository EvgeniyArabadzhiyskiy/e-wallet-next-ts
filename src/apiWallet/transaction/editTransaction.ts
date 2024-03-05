import { TRPCError } from "@trpc/server";
import prisma from "../../lib/prismaClient";
import { type TEditTransactionValues } from "@/src/helpers/inputSchemas";

export const editTransaction = async (userID: string, updatedValues: TEditTransactionValues) => {
  const { typeOperation, comment, category, amount, date, transactionID } =
    updatedValues;

  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const prevTransaction = await prisma.transaction.findFirst({
    where: {
      owner: user.id,
      id: transactionID,
    },
  });

  if (!prevTransaction) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const sum = typeOperation === "income" ? amount : -amount;

  const updatedTransaction = await prisma.transaction.update({
    where: {
      owner: user.id,
      id: transactionID,
    },

    data: {
      category,
      comment,
      amount: sum,
      date,
      typeOperation,
    },
  });

  const newBalance =
    user.balance - prevTransaction.amount + updatedTransaction.amount;

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },

    data: {
      balance: newBalance,
    },
  });

  return {
    ...updatedTransaction,
    timestamps: updatedTransaction.timestamps.toString(),
  };
};
