import { cookies } from "next/headers";
import prisma from "../../lib/prismaClient";

export const signOut = async (userID: string) => {
  const nextCookies = cookies();

  await prisma.user.update({
    where: {
      id: userID,
    },

    data: {
      token: "",
    },
  });

  nextCookies.delete("accessToken");

  return {
    message: "successful logout",
  };
};
