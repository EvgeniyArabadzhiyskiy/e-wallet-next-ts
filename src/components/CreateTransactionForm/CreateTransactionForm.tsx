"use client";

import { Dispatch, SetStateAction } from "react";
import { useCreateTransaction } from "@/src/apiWallet";
import {
  TTransactionValues,
  transactionValidator,
} from "@/src/helpers/formValidation";
import { FormikHelpers } from "formik";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
import TransactionError from "../Errors/TransactionError";
import { Title } from "../TransactionForm/TransactionForm.styled";
import { setTitleTransaction } from "@/src/helpers/setTitleTransaction";
import FormContainer from "../FormContainer";
import TransactionFormFields from "../TransactionFormFields";

interface IPropsCreateTransaction {
  isIncome: boolean;
  setIsIncome: Dispatch<SetStateAction<boolean>>;
  modalKey: string;
}

function CreateTransactionForm({
  isIncome,
  setIsIncome,
  modalKey,
}: IPropsCreateTransaction) {
  const { mutate, isLoading, error, isError, reset } = useCreateTransaction();

  const initialValues: TTransactionValues = {
    comment: "",
    amount: 0,
    category: "",
    date: new Date().toString(),
  };

  const onFormSubmit = (
    values: TTransactionValues,
    { resetForm }: FormikHelpers<TTransactionValues>
  ) => {
    const typeOperation = getTypeOperation(isIncome);

    const transaction = {
      ...values,
      amount: Number(values.amount),
      typeOperation,
    };

    mutate(transaction);
    resetForm();
  };

  if (isError) {
    return <TransactionError error={error.message} resetError={reset} />;
  }

  return (
    <>
      <Title>{setTitleTransaction(modalKey)}</Title>

      <FormContainer<TTransactionValues>
        initialValues={initialValues}
        validationSchema={transactionValidator}
        onSubmit={onFormSubmit}
        render={(formik) => (
          <TransactionFormFields
            formik={formik}
            isIncome={isIncome}
            setIsIncome={setIsIncome}
            modalKey={modalKey}
            isLoading={isLoading}
          />
        )}
      />
    </>
  );
}

export default CreateTransactionForm;
