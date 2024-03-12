import { privateProcedure, router } from "../trpc";
import { getBalance } from "@/src/apiWallet/balance";

import {
  createTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransactions,
} from "@/src/apiWallet/transaction";

import {
  createTransactionSchema,
  deleteTransactionSchema,
  editTransactionSchema,
  getAllTransactionsSchema,
} from "@/src/helpers/inputSchemas";

import { prismaControllerWrapper } from "@/src/helpers/prismaControllerWrapper";

export const transactionRouter = router({
  getAllTransactions: privateProcedure
    .input(getAllTransactionsSchema)
    .query(async ({ ctx, input }) => {
      const { userID } = ctx;
      const { limit, cursor } = input;

      const page = cursor || 1;
      const skip = (page - 1) * limit;

      return await prismaControllerWrapper(
        async () => await getAllTransactions(userID, limit, skip)
      );
    }),

  createTransaction: privateProcedure
    .input(createTransactionSchema)
    .mutation(async ({ ctx, input }) => {
      const { userID } = ctx;

      return await prismaControllerWrapper(
        async () => await createTransaction(userID, input)
      );
    }),

  daleteTransaction: privateProcedure
    .input(deleteTransactionSchema)
    .mutation(async ({ ctx, input }) => {
      const { userID } = ctx;

      return await prismaControllerWrapper(
        async () => await deleteTransaction(userID, input)
      );
    }),

  editTransaction: privateProcedure
    .input(editTransactionSchema)
    .mutation(async ({ ctx, input }) => {
      const { userID } = ctx;

      return await prismaControllerWrapper(
        async () => await editTransaction(userID, input)
      );
    }),

  getBalance: privateProcedure.query(async ({ ctx }) => {
    const { userID } = ctx;
    
    return await prismaControllerWrapper(async () => await getBalance(userID));
  }),
});
