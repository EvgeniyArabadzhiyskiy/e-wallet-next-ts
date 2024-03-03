import { TRPCError } from "@trpc/server";
import prisma from "../../lib/prismaClient";
import { getUserID } from "@/src/helpers/getUserID";

export const currentUser = async () => {
  const userID = await getUserID();

  if (!userID) {
    return null;
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return {
    email: user.email,
    firstName: user.firstName,
    balance: user.balance,
    token: user.token,
  };
};
