import { Form, Formik, FormikProps, FormikHelpers, FormikValues } from "formik";
import { ValidationSchema } from "@/src/helpers/formValidation";

interface IProps<T> {
  initialValues: T;
  validationSchema: ValidationSchema;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => Promise<void>;
  render: (formik: FormikProps<T>) => JSX.Element;
}

function FormContainer <T extends FormikValues>(props: IProps<T>) {
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
