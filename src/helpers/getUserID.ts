import { cookies } from "next/headers";
import { verifyToken } from "@/src/helpers/verifyToken";
import { TRPCError } from "@trpc/server";

export const getUserID = async () => {
  const nextCookies = cookies();
  const userID = await verifyToken(nextCookies);

  if (!userID) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return userID;
};
