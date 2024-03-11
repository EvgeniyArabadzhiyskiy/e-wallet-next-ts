"use client";

import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";
import { TTransactionValues, transactionValidator } from "@/src/helpers/formValidation";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
import { useCreateTransaction, useEditTransaction } from "@/src/apiWallet";

import { Title } from "./TransactionForm.styled";
import FormContainer from "../FormContainer";
import TransactionFormFields from "../TransactionFormFields";
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
   = useEditTransaction();
   
  const { mutate: createTransaction, error: createError, isError: isCreateError, reset: createReset }
   = useCreateTransaction();
  
  const initialValues: TTransactionValues  = {
    comment: "",
    amount: 0,
    category: "",
    date: new Date().toString(),
  };

  const onFormSubmit = async (
    values: TTransactionValues,
    { resetForm }: FormikHelpers<TTransactionValues>
  ) => {
    const typeOperation = getTypeOperation(isIncome);

    const transaction = {
      ...values,
      amount: Number(values.amount),
      typeOperation,
    };

    if (modalKey === "ADD") {
      createTransaction(transaction);
      resetForm();
    }

    if (modalKey === "EDIT") {
      editTransaction({...transaction, transactionID: editId});
      resetForm();
    }
  };

  if (isEditError) {
    return (
      <CreateTransactionError error={editError.message} resetError={editReset} />
    );
  }

  if (isCreateError) {
    return (
      <CreateTransactionError error={createError.message} resetError={createReset} />
    );
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
          />
        )}
      />
    </>
  );
}

export default TransactionForm;