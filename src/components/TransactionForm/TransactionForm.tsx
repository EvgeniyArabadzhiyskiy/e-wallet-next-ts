import { ITransactionValue } from "@/src/types/transactionValue";
import FormContainer from "../FormContainer/FormContainer";
import { Title } from "./TransactionForm.styled";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
import TransactionFormFields from "../TransactionFormFields/TransactionFormFields";
import { Form, Formik, FormikProps, FormikHelpers } from "formik";
import { ILoginValues } from "@/src/types/loginValues";





interface IProps {
  setIsIncome: any;
  isIncome: boolean;
}

export default function TransactionForm({ isIncome, setIsIncome }: IProps) {
  const initialValues: ITransactionValue = {
    comment: "",
    amount: "",
    category: "",
    date: new Date().toString(),
  };

  const handleSubmit = async (
    values: ITransactionValue,
    formikHelpers: FormikHelpers<ITransactionValue>
  ) => {
    const typeOperation = getTypeOperation(isIncome);

    const transaction = {
      ...values,
      amount: Number(values.amount),
      typeOperation,
    };
  };

  return (
    <>
      <Title>TransactionForm</Title>

      <FormContainer<ITransactionValue>
        initialValues={initialValues}
        validationSchema={{}}
        onSubmit={handleSubmit}
        
        render={(formik) => (
          <TransactionFormFields
            formik={formik}
            isIncome={isIncome}
            setIsIncome={setIsIncome}
          />
        )}
      />
    </>
  );
}

// const renderForm = (props: FormikProps<ITransactionValue>) => (
//   <TransactionFormFields
//     formik={props}
//     isIncome={isIncome}
//     setIsIncome={setIsIncome}
//   />
// );

// (values: ITransactionValue, { resetForm }: FormikHelpers<ITransactionValue>) => void
//  (values: ITransactionValue, formikHelpers: FormikHelpers<ITransactionValue>) => Promise<void>
