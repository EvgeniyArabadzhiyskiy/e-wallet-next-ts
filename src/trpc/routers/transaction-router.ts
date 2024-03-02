import { privateProcedure, publicProcedure, router } from "../trpc";
import prisma from "../../lib/prismaClient";
import * as Yup from "yup";
import { TRPCError } from "@trpc/server";
import z from "zod";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import { getBalance } from "@/src/apiWallet/balance";
// import { Prisma } from "@prisma/client";

// const schemaValidation = Yup.object().shape({
//   // typeOperation: Yup.string().oneOf(["expense", "income"]).required(),
//   typeOperation: Yup.string().required(),
//   category: Yup.string().required(),
//   comment: Yup.string().required(),
//   amount: Yup.number().required(),
//   date: Yup.string().required(),
// });

// const schemaValidation = Yup.object({
//   // typeOperation: Yup.string().oneOf(["expense", "income"]).required(),
//   typeOperation: Yup.string().required(),
//   category: Yup.string().required(),
//   comment: Yup.string().required(),
//   amount: Yup.number().required(),
//   date: Yup.string().required(),
// }).required();

export const transactionRouter = router({
  getAllTransactions: privateProcedure
    .input(
      z.object({
        limit: z.number(),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userID, req } = ctx;
      const { limit, cursor } = input;

      const page = cursor || 1;

      const skip = (page - 1) * limit;

      const result = await getAllTransactions(userID, limit, skip);

      return result;

      // const user = await prisma.user.findFirst({
      //   where: {
      //     id: userID,
      //   },
      // });

      // if (!user) {
      //   throw new TRPCError({ code: "UNAUTHORIZED" });
      // }

      // const transactions = await prisma.transaction.findMany({
      //   where: {
      //     owner: {
      //       equals: userID,
      //     },
      //   },
      //   orderBy: [{ timestamps: "desc" }, { createdAt: "desc" }],
      //   skip,
      //   take: limit,
      // });

      // const serializedTransactions = transactions.map((el) => {
      //   return {
      //     ...el,
      //     timestamps: el.timestamps.toString(),
      //   };
      // });

      // return {
      //   transactions: serializedTransactions,
      // };
    }),

  createTransaction: privateProcedure
    .input(
      z.object({
        typeOperation: z.string(),
        category: z.string(),
        comment: z.string(),
        amount: z.number(),
        date: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userID } = ctx;
      const { typeOperation, amount, category, comment, date } = input;

      const user = await prisma.user.findFirst({
        where: {
          id: userID,
        },
      });

      if (!user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const timestamps = new Date(date).getTime();
      const sum = typeOperation === "income" ? amount : -amount;
      const newBalance = user.balance + sum;
      const currentCategory = typeOperation === "income" ? "Income" : category;

      const transaction = await prisma.transaction.create({
        data: {
          comment,
          category: currentCategory,
          // amount,                       // Было
          amount: sum, // Стало
          date,
          typeOperation,
          timestamps: BigInt(timestamps),
          owner: user?.id,
          balanceAfterTransaction: newBalance.toString(),
        },
      });

      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          balance: newBalance,
        },
      });

      return {
        ...transaction,
        timestamps: transaction.timestamps.toString(),
      };
    }),

  daleteTransaction: privateProcedure
    // .input(z.string())
    .input(
      z.object({
        id: z.string(),
        lastPageNumber: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userID } = ctx;
      const { id: transactionID, lastPageNumber } = input;

      const user = await prisma.user.findFirst({
        where: {
          id: userID,
        },
      });

      if (!user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const remoteTransaction = await prisma.transaction.delete({
        where: {
          owner: user.id,
          id: transactionID,
        },
      });

      const { typeOperation, amount } = remoteTransaction;
      // const sum = typeOperation === "income" ? amount : -amount;  // Было
      // const newBalance = user.balance - sum;                      // Было
      const newBalance = user.balance - amount; // Стало

      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },

        data: {
          balance: newBalance,
        },
      });

      const limit = 10;
      const page = lastPageNumber;
      const skip = (page - 1) * limit;

      const { transactions } = await getAllTransactions(userID, limit, skip);
      const latestTransaction = transactions.pop();

      return {
        remoteTransaction: {
          ...remoteTransaction,
          timestamps: remoteTransaction.timestamps.toString(),
        },
        latestTransaction,
      };
    }),

  editTransaction: privateProcedure
    .input(
      z.object({
        typeOperation: z.string(),
        comment: z.string(),
        category: z.string(),
        amount: z.number(),
        date: z.string(),
        transactionID: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userID } = ctx;
      const { typeOperation, comment, category, amount, date, transactionID } =
        input;

      const user = await prisma.user.findFirst({
        where: {
          id: userID,
        },
      });

      if (!user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const prevTransaction = await prisma.transaction.findFirst({
        where: {
          owner: user.id,
          id: transactionID,
        },
      });

      if (!prevTransaction) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const sum = typeOperation === "income" ? amount : -amount;

      const updatedTransaction = await prisma.transaction.update({
        where: {
          owner: user.id,
          id: transactionID,
        },

        data: {
          category,
          comment,
          // amount,
          amount: sum,
          date,
          typeOperation,
        },
      });

      const newBalance =
        user.balance - prevTransaction.amount + updatedTransaction.amount;

      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },

        data: {
          balance: newBalance,
        },
      });

      return {
        ...updatedTransaction,
        timestamps: updatedTransaction.timestamps.toString(),
      };
    }),

  getBalance: privateProcedure.query(async ({ ctx }) => {
    const { userID } = ctx;

    return await getBalance(userID);
  }),
});
