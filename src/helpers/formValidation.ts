import * as yup from "yup";

const valueAfterComma = (value: number | undefined) => {
  if (!value) return false;
  const decimalPart = value.toString().split(".")[1];
  return !decimalPart || decimalPart.length <= 2;
};

export const registrationValidator = yup.object().shape({
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
  firstName: yup
    .string()
    .min(1, "Minimun 1 characters")
    .max(12, "Maximum 12 characters")
    .required("Required"),
});

export const loginValidator = yup.object().shape({
  email: yup.string().email("Invalid email").required(),
  password: yup.string().required("Required"),
});

export const transactionValidator = yup.object().shape({
  category: yup.string().required("This field is required"),

  amount: yup
    .number()
    .typeError("You need to enter a number")
    .positive("Only positive value")
    .test("is-decimal", "Maximum two digits after comma", (value) =>
      valueAfterComma(Number(value))
    )
    .required("This field is required"),

  comment: yup
    .string()
    .min(1, "Must be longer than 2 letters")
    .max(20, "Must be shorter than 20 letters")
    .required("This field is required"),
  date: yup.string().required(),
});

export type TRegistrationValues = yup.Asserts<typeof registrationValidator>;
export type TLoginValues = yup.Asserts<typeof loginValidator>;
export type TTransactionValues = yup.Asserts<typeof transactionValidator>;

export type ValidationSchema = yup.Schema<
  TLoginValues | TRegistrationValues | TTransactionValues
>;
