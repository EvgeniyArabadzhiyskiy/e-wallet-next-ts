"use client";

import { FormikHelpers } from "formik";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { ITransactionData, ITransactionValue } from "@/src/types/transactionValue";

import schema from "@/src/helpers/formValidation";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
import { createTransaction } from "@/src/apiWallet/createTransaction";
import TransactionFormFields from "../TransactionFormFields/TransactionFormFields";

import { Title } from "./TransactionForm.styled";
import FormContainer from "../FormContainer/FormContainer";

interface IProps {
  setIsIncome: any;
  isIncome: boolean;
}



export default function TransactionForm({ isIncome, setIsIncome }: IProps) {
  const { setModalToggle } = useGlobalState();
  const session = useSession();
  const token = session.data?.user.token;

  const initialValues: ITransactionValue = {
    comment: "",
    amount: "",
    category: "",
    date: new Date().toString(),
  };

  const mutation = useMutation({
    mutationFn: (transaction: ITransactionData) =>
      createTransaction(transaction, token),

    onSuccess: (data) => {
      console.log("onSuccess data:", data);
    },
  });

  const onFormSubmit = async (
    values: ITransactionValue,
    { resetForm }: FormikHelpers<ITransactionValue>
  ) => {
    const typeOperation = getTypeOperation(isIncome);

    const transaction = {
      ...values,
      amount: Number(values.amount),
      typeOperation,
    };

    mutation.mutate(transaction);
    resetForm();
    setModalToggle("transaction");
  };

  return (
    <>
      <Title>TransactionForm</Title>

      <FormContainer<ITransactionValue>
        initialValues={initialValues}
        validationSchema={schema.transactionShema}
        onSubmit={onFormSubmit}
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
