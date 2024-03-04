import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../../lib/prismaClient";
import { TRPCError } from "@trpc/server";
import { TRegistrationValues } from "@/src/helpers/formValidation";

export const signUp = async (credentials: TRegistrationValues) => {
  const { email, password, firstName } = credentials;
  const { JWT_SECRET_KEY = "" } = process.env;

  const user = await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user) {
    throw new TRPCError({ code: "CONFLICT", message: "Email in use" });
  }

  const hash = await bcrypt.hash(password, 10);

  const result = await prisma.user.create({
    data: {
      email,
      password: hash,
      firstName,
    },
  });

  const payload = {
    id: result.id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "14d" });

  const newUser = await prisma.user.update({
    where: {
      id: result.id,
    },

    data: {
      token,
    },
  });

  return {
    email: newUser.email,
    firstName: newUser.firstName,
    balance: newUser.balance,
    token: newUser.token,
  };
};
