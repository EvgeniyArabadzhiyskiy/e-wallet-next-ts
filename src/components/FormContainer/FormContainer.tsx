import { ValidationSchema } from "@/src/helpers/formValidation";
import { ILoginValues } from "@/src/types/loginValues";
import { IRegisterValues } from "@/src/types/registerValues";
import { ITransactionValue } from "@/src/types/transactionValue";
import { Form, Formik, FormikProps, FormikHelpers, FormikValues } from "formik";

type FormValues = ILoginValues | IRegisterValues | ITransactionValue 

interface IProps<T> {
  initialValues: T;
  validationSchema: ValidationSchema;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => Promise<void>;
  render: (formik: FormikProps<T>) => JSX.Element;
}

function FormContainer <T extends FormValues>(props: IProps<T>) {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
    >
      {(formik) => <Form>{props.render(formik)}</Form>}
    </Formik>
  );
}

export default FormContainer;

//========================================================
// const LoginFormContainer: React.FC<IProps<ILoginValues>> = ({
//   initialValues,
//   validationSchema,
//   onSubmit,
//   render,
// }) => {
//   return (
//     <Formik
//       onSubmit={onSubmit}
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//     >
//       {(formik) => <Form>{render(formik)}</Form>}
//     </Formik>
//   );
// };

// const RegisterFormContainer: React.FC<IProps<IRegisterValues>> = ({
//   initialValues,
//   validationSchema,
//   onSubmit,
//   render,
// }) => {
//   return (
//     <Formik
//       onSubmit={onSubmit}
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//     >
//       {(formik) => <Form>{render(formik)}</Form>}
//     </Formik>
//   );
// };

// const TransactionFormContainer: React.FC<IProps<ITransactionValue>> = ({
//   initialValues,
//   validationSchema,
//   onSubmit,
//   render,
// }) => {
//   return (
//     <Formik
//       onSubmit={onSubmit}
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//     >
//       {(formik) => <Form>{render(formik)}</Form>}
//     </Formik>
//   );
// };

// export { LoginFormContainer, RegisterFormContainer, TransactionFormContainer };

//======================================================
// interface IProps<T> {
//   initialValues: T;
//   validationSchema: any;
//   onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => Promise<void>;
//   render: (formik: FormikProps<T>) => React.ReactNode;
// }

// const FormContainer: React.FC<IProps<any>> = ({
//   initialValues,
//   validationSchema,
//   onSubmit,
//   render,
// }) => {
//   return (
//     <>
//       <Formik
//         onSubmit={onSubmit}
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//       >
//         {(formik) => <Form>{render(formik)}</Form>}
//       </Formik>
//     </>
//   );
// };

// export default FormContainer;

//======================================================
// import axios, { AxiosResponse } from "axios";

// interface IUser {
//   name: string;
//   age: number;
//   city: string;
// }

// async function fetchData(): Promise<IUser> {
//   try {
//     const response: AxiosResponse<IUser> = await axios.get("https://example.com/api/data");
//     const user: IUser = response.data;
//     return user;
//   } catch (error) {
//     // Обработка ошибки
//     console.error("Error fetching data:", error);
//     throw error; // Возможно, выбросить ошибку для дальнейшей обработки
//   }
// }
