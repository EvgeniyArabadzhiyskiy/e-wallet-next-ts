import * as yup from "yup";

export const getAllTransactionsSchema = yup.object({
  limit: yup.number().required(),
  cursor: yup.number().nullable(),
});

export const createTransactionSchema = yup.object({
  typeOperation: yup.string().required(),
  category: yup.string().required(),
  comment: yup.string().required(),
  amount: yup.number().required(),
  date: yup.string().required(),
});

export const deleteTransactionSchema = yup.object({
  transactionID: yup.string().required(),
  lastPageNumber: yup.number().required(),
});

export const editTransactionSchema = yup.object({
  typeOperation: yup.string().required(),
  category: yup.string().required(),
  comment: yup.string().required(),
  amount: yup.number().required(),
  date: yup.string().required(),
  transactionID: yup.string().required(),
});

export const statisticValidator = yup.object().shape({
  month: yup.string(),
  year: yup.string(),
});

export type TCreateTransactionValues = yup.Asserts<
  typeof createTransactionSchema
>;
export type TDeleteTransactionValues = yup.Asserts<
  typeof deleteTransactionSchema
>;
export type TEditTransactionValues = yup.Asserts<typeof editTransactionSchema>;

export type TStatisticValues = yup.Asserts<typeof statisticValidator>;
