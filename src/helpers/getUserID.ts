import { cookies } from "next/headers";
import { verifyToken } from "@/src/helpers/verifyToken";

export const getUserID = async () => {
  const nextCookies = cookies();
  const userID = await verifyToken(nextCookies);

  return userID;
};
