// import { USER_REGISTER } from "@/src/constants/apiPath";
// import { fetcher } from "@/src/helpers/fetcher";
// import { ICredentials } from "@/src/types/registerValues";
// import { CurrentUser } from "@/src/types/user";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../../lib/prismaClient";
import { TRPCError } from "@trpc/server";
import { TsignUpValidator } from "@/src/trpc/routers/auth-router";

export const signUp = async (credentials: TsignUpValidator) => {
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
    user: {
      email: newUser.email,
      firstName: newUser.firstName,
      balance: newUser.balance,
    },
    token: newUser.token,
  };
};

// export const register = async (credentials: ICredentials) => {
//   const options: RequestInit = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(credentials),
//   };

//   const data = await fetcher<CurrentUser>(`${USER_REGISTER}`, options);

//   return data;
// };
