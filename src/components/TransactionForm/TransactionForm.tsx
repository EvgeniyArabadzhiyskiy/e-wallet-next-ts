"use client";

import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";
import { transactionShema } from "@/src/helpers/formValidation";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
import { useCreateTransaction, useEditTransaction } from "@/src/apiWallet";
import { ITransactionData, ITransactionValue } from "@/src/types/transactionValue";

import { Title } from "./TransactionForm.styled";
import FormContainer from "../FormContainer/FormContainer";
import TransactionFormFields from "../TransactionFormFields/TransactionFormFields";
import { setTitleTransaction } from "@/src/helpers/setTitleTransaction";
import CreateTransactionError from "../Errors/CreateTransactionError";

interface IProps {
  isIncome: boolean;
  setIsIncome: Dispatch<SetStateAction<boolean>>;
  modalKey: string;
  editId: string;
}

function TransactionForm({ isIncome, setIsIncome, modalKey, editId }: IProps) {
  const { mutate: editTransaction, error: editError, isError: isEditError, reset: editReset }
   = useEditTransaction(editId);
   
  const { mutate: createTransaction, error: createError, isError: isCreateError, reset: createReset }
   = useCreateTransaction();
  
  const initialValues: ITransactionValue = {
    comment: "",
    amount: "",
    category: "",
    date: new Date().toString(),
  };

  const onFormSubmit = async (
    values: ITransactionValue,
    { resetForm }: FormikHelpers<ITransactionValue>
  ) => {
    const typeOperation = getTypeOperation(isIncome);

    const transaction: ITransactionData = {
      ...values,
      typeOperation,
    };

    if (modalKey === "ADD") {
      createTransaction(transaction);
      resetForm();
    }

    if (modalKey === "EDIT") {
      editTransaction(transaction);
      resetForm();
    }
  };

  if (isEditError) {
    return (
      <CreateTransactionError error={editError} resetError={editReset} />
    );
  }

  if (isCreateError) {
    return (
      <CreateTransactionError error={createError} resetError={createReset} />
    );
  }

  return (
    <>
      <Title>{setTitleTransaction(modalKey)}</Title>

      <FormContainer<ITransactionValue>
        initialValues={initialValues}
        validationSchema={transactionShema}
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

export default TransactionForm


{/* <Formik
onSubmit={onFormSubmit}
initialValues={initialValues}
validationSchema={transactionShema}
>
{(formik) => {
  return (
    <TransactionFormFields
      formik={formik}
      isIncome={isIncome}
      setIsIncome={setIsIncome}
    />
  );
}}
</Formik> */}