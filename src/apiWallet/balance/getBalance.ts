import prisma from "../../lib/prismaClient";
import { TRPCError } from "@trpc/server";

export const getBalance = async (userID: string | null) => {
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

  return { userBalance: user.balance };
};
