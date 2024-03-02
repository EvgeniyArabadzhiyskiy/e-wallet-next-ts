import { publicProcedure, router } from "../trpc";
import prisma from "../../lib/prismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as Yup from "yup";
import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const registerValidationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
  firstName: Yup.string().required(),
});

// const loginValidationSchema = Yup.object({
//   email: Yup.string().required(),
//   password: Yup.string().required(),
// });

// const registerValidationSchema = Yup.object({
//   email: Yup.string().required(),
//   password: Yup.string().required(),
//   firstName: Yup.string().required(),
// });

export const authRouter = router({
  getAllUsers: publicProcedure.query(() => {
    const users = prisma.user.findMany();
    // const cookieStore = cookies();
    // cookieStore.set({
    //     name: "Poken",
    //     value: 'newUser',
    //     path: "/",
    //     maxAge: 60 * 60 * 24 * 14,
    //   });

    return users;
  }),

  //   signUper: publicProcedure
  //     .input(registerValidationSchema)
  //     .mutation(async ({ ctx, input }) => {
  //       const { req } = ctx;
  //     }),

  signUp: publicProcedure
    .input(registerValidationSchema)
    .mutation(async ({ ctx, input }) => {
      const { req } = ctx;
      const { JWT_SECRET_KEY = "" } = process.env;

      const cookieStore = cookies();
      // console.log("cookieStore:", cookieStore.get("poly")?.value);

      const { email, password, firstName } = input;

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

    //   cookieStore.set({
    //     name: "accessToken",
    //     value: newUser.token,
    //     path: "/",
    //     maxAge: 60 * 60 * 24 * 14,
    //   });

      return {
        user: {
          email: newUser.email,
          firstName: newUser.firstName,
          balance: newUser.balance,
        },
        token: newUser.token,
      };
    }),

  signIn: publicProcedure
    .input(loginValidationSchema)
    .mutation(async ({ ctx, input }) => {
      const { req } = ctx;
      const { email, password } = input;

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
        user: {
          email: newUser.email,
          firstName: newUser.firstName,
          balance: newUser.balance,
        },
        token: newUser.token,
      };
    }),
});
