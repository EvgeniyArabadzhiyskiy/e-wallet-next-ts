import * as yup from "yup";
import { ITransactionValue } from "../types/transactionValue";
import { IRegisterValues } from "../types/registerValues";
import { ILoginValues } from "../types/loginValues";

type TransactionSchema = ITransactionValue<number>;

// export type ValidationType =
//   | typeof registerSchema
//   | typeof loginSchema
//   | typeof transactionShema;

export type ValidationSchema = yup.SchemaOf<
  ILoginValues | IRegisterValues | TransactionSchema
>;

// const valueAfterComma = (value: number | undefined) => {
//   if (!value) return false;
//   const idxComma = String(value).indexOf(".");
//   const isTwoDigits = String(value).length - idxComma < 4;

//   if (idxComma === -1) {
//     return true;
//   }

//   return isTwoDigits;
// };

const valueAfterComma = (value: number | undefined) => {
  if (!value) return false;
  const decimalPart = value.toString().split(".")[1];
  return !decimalPart || decimalPart.length <= 2;
};

export const registerSchema: ValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required(),
  password: yup
    .string()
    .min(6, "Minimun 6 characters")
    .max(12, "Maximum 12 characters")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password do not match")
    .required(),
  name: yup
    .string()
    .min(1, "Minimun 1 characters")
    .max(12, "Maximum 12 characters")
    .required("Required"),
});

export const loginSchema: ValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required(),
  password: yup.string().required("Required"),
});

export const transactionShema: ValidationSchema = yup.object().shape({
  category: yup.string().required("This field is required"),

  amount: yup
    .number()
    .typeError("You need to enter a number")
    .positive("Only positive value")
    .test("is-decimal", "Maximum two digits after comma", (value) =>
      valueAfterComma(value)
    )
    .required("This field is required"),

  comment: yup
    .string()
    .min(2, "Must be longer than 2 letters")
    .max(20, "Must be shorter than 20 letters")
    .required("This field is required"),
  date: yup.string().required(),
});

// const schema = {
//   register: yup.object().shape({
//     email: yup.string().email("Invalid email").required(),
//     password: yup
//       .string()
//       .min(6, "Minimun 6 characters")
//       .max(12, "Maximum 12 characters")
//       .required("Required"),
//     confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password")], "Password do not match")
//       .required(),
//     name: yup
//       .string()
//       .min(1, "Minimun 1 characters")
//       .max(12, "Maximum 12 characters")
//       .required("Required"),
//   }),

//   login: yup.object().shape({
//     email: yup.string().email("Invalid email").required(),
//     password: yup.string().required("Required"),
//   }),

//   transactionShema: yup.object().shape({
//     category: yup.string().required("This field is required"),

//     amount: yup
//       .number()
//       .typeError("You need to enter a number")
//       .positive("Only positive value")
//       .test("is-decimal", "Maximum two digits after comma", (value) =>
//         valueAfterComma(value)
//       )
//       .required("This field is required"),

//     comment: yup
//       .string()
//       .min(2, "Must be longer than 2 letters")
//       .max(20, "Must be shorter than 20 letters")
//       .required("This field is required"),
//   }),
// };

// export default schema;
