"use client";

import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { transactionShema } from "@/src/helpers/formValidation";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
import { useCreateTransaction, useEditTransaction } from "@/src/apiWallet";
import { ITransactionData, ITransactionValue } from "@/src/types/transactionValue";

import { Title } from "./TransactionForm.styled";
import FormContainer from "../FormContainer/FormContainer";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import TransactionFormFields from "../TransactionFormFields/TransactionFormFields";
import { setTitleTransaction } from "@/src/helpers/setTitleTransaction";
import { Box } from "../Box/Box";

interface IProps {
  isIncome: boolean;
  setIsIncome: Dispatch<SetStateAction<boolean>>;
  modalKey: string;
  editId: string;
}

function TransactionForm({ isIncome, setIsIncome, modalKey, editId }: IProps) {
  const { setModalToggle } = useGlobalState();
  const [error, setError] = useState<Error | null>(null);  // Возможно нужно убрать в useCreateTransaction
  // console.log("Error:", error);

  const { mutate: editTransaction } = useEditTransaction(editId)
  const { mutate: createTransaction, error: myError, isError } = useCreateTransaction(setError)
  // console.log("isError:", isError);
  // console.log("My Error:", myError);

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

  if (isError) {
    // return (
    //   <>
    //     <h1 style={{ color: "white" }}>Произошла ошибка:</h1>
    //     <h2 style={{ color: "white" }}>{myError.message}</h2>
    //     <Box mt={4}>
    //       <CancelButton
    //         cancelText="cancel"
    //         onClick={() => setModalToggle("transaction")}
    //       />
    //     </Box>
    //   </>
    // );

    throw myError
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