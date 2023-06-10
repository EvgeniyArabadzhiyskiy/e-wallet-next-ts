import { ILoginValues } from "@/types/loginValues";
import { Form, Formik, FormikProps, FormikHelpers } from "formik";

// interface IProps {
//   initialValues: ILoginValues;
//   validationSchema: any;
//   onSubmit: (values: ILoginValues, formikHelpers: FormikHelpers<ILoginValues>) => Promise<void>;
//   render: (formik: FormikProps<ILoginValues>) => React.ReactNode;
// }

// interface IRegisterValues {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   name: string;
// }

interface IProps<T> {
  initialValues: T;
  validationSchema: any;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => Promise<void>;
  render: (formik: FormikProps<T>) => React.ReactNode;
}

const FormContainer: React.FC<IProps<ILoginValues | IRegisterValues>> = ({
  initialValues,
  validationSchema,
  onSubmit,
  render,
}) => {
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => <Form>{render(formik)}</Form>}
      </Formik>
    </>
  );
};

export default FormContainer;

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
