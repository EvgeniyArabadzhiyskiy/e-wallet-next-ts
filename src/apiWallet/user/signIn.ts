import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../../lib/prismaClient";
import { cookies } from "next/headers";
import { TRPCError } from "@trpc/server";
import { TLoginValues } from "@/src/helpers/formValidation";

export const signIn = async (credentials: TLoginValues) => {
  const { email, password } = credentials;

  const cookieStore = cookies();
  const { JWT_SECRET_KEY = "" } = process.env;

  const user = await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid password or email",
    });
  }

  const isVerifiedPassword = await bcrypt.compare(password, user.password);

  if (!isVerifiedPassword) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid password or email",
    });
  }

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "14d" });

  const newUser = await prisma.user.update({
    where: {
      id: user.id,
    },

    data: {
      token,
    },
  });

  cookieStore.set({
    name: "accessToken",
    value: newUser.token,
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });

  return {
    email: newUser.email,
    firstName: newUser.firstName,
    balance: newUser.balance,
    token: newUser.token,
  };
};
