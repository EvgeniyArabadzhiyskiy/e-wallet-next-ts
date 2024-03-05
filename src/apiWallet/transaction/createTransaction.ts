import prisma from "../../lib/prismaClient";
import { TRPCError } from "@trpc/server";
import { type TCreateTransactionValues } from "@/src/helpers/inputSchemas";

export const createTransaction = async (
  userID: string,
  transactionValues: TCreateTransactionValues
) => {
  const { typeOperation, amount, category, comment, date } = transactionValues;
  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const timestamps = new Date(date).getTime();
  const sum = typeOperation === "income" ? amount : -amount;
  const newBalance = user.balance + sum;
  const currentCategory = typeOperation === "income" ? "Income" : category;

  const transaction = await prisma.transaction.create({
    data: {
      comment,
      category: currentCategory,
      amount: sum,
      date,
      typeOperation,
      timestamps: BigInt(timestamps),
      owner: user?.id,
      balanceAfterTransaction: newBalance.toString(),
    },
  });

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      balance: newBalance,
    },
  });

  return {
    ...transaction,
    timestamps: transaction.timestamps.toString(),
  };
};
