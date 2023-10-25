import { Form, Formik, FormikProps, FormikHelpers } from "formik";

import { ILoginValues } from "@/src/types/loginValues";
import { IRegisterValues } from "@/src/types/registerValues";
import { ITransactionValue } from "@/src/types/transactionValue";
import { ValidationSchema } from "@/src/helpers/formValidation";

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
