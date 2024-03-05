import { TRPCError } from "@trpc/server";
import prisma from "../../lib/prismaClient";

export const getAllTransactions = async (
  userID: string | null,
  limit: number = 10,
  skip: number = 0
) => {
  if (!userID) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const transactions = await prisma.transaction.findMany({
    where: {
      owner: {
        equals: userID,
      },
    },
    orderBy: [{ timestamps: "desc" }, { createdAt: "desc" }],
    skip,
    take: limit,
  });

  const serializedTransactions = transactions.map((el) => {
    return {
      ...el,
      timestamps: el.timestamps.toString(),
    };
  });

  return {
    transactions: serializedTransactions,
  };
};
