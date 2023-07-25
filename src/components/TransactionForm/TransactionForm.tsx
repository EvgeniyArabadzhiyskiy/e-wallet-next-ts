"use client";

import { FormikHelpers } from "formik";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

import { transactionShema } from "@/src/helpers/formValidation";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
// import { createTransaction } from "@/src/apiWallet/createTransaction";
import { ITransactionData, ITransactionValue } from "@/src/types/transactionValue";

import FormContainer from "../FormContainer/FormContainer";
import TransactionFormFields from "../TransactionFormFields/TransactionFormFields";
import { Title } from "./TransactionForm.styled";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import axios from "axios";
import { useState } from "react";
import { NewTransaction } from "@/src/types/transactions";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import { useUser } from "@/src/hooks/useUser";

interface IProps {
  setIsIncome: any;
  isIncome: boolean;
}

// export const createTransaction = async (transaction: any) => {

//   const options = {
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//       Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTM0ZGFhMTQyNGVhZDExNWVhNTJhNSIsImlhdCI6MTY4OTE0NjM0NSwiZXhwIjoxNjkwMzU1OTQ1fQ.GuTYaKcbkLR4odPZ3iJBd6ORIDPHZaAXwVKRfmSpoco"}`,
//     },
//   }

//   const data = await axios.post(`https://wallet-backend-xmk0.onrender.com/api/transaction`, transaction, options);
//   console.log("createTransaction  data:", data);
//   return data;
  
// };



export default function TransactionForm({ isIncome, setIsIncome }: IProps) {
  const { token } = useUser();

  const { setModalToggle } = useGlobalState();
  const [error, setError] = useState<Error | null>(null);

  const initialValues: ITransactionValue = {
    comment: "",
    amount: "",
    category: "",
    date: new Date().toString(),
  };

  const mutation = useMutation<NewTransaction, Error, ITransactionData>({
    // createTransaction должна возвращать тип NewTransaction
    mutationFn: (transaction) =>
    apiWallet.createTransaction(transaction, token),

    onSuccess: (data) => {
      console.log("onSuccess data:", data);
      setModalToggle("transaction");
    },

    onError: (error) => {
      console.log("TransactionForm  error:", error.message);
      setError(error);
    }
  });

  const onFormSubmit = async (
    values: ITransactionValue,
    { resetForm }: FormikHelpers<ITransactionValue>
  ) => {
    const typeOperation = getTypeOperation(isIncome);

    const transaction: ITransactionData = {
      ...values,
      typeOperation,
    };

    mutation.mutate(transaction);
    resetForm();
    // setModalToggle("transaction");
  };

  if (error) {
    return (
      <>
        <h1 style={{ color: "white" }}>Произошла ошибка:</h1>
        <h2 style={{ color: "white" }}>{error.message}</h2>
        <CancelButton cancelText="cancel" onClick={() => setModalToggle("transaction")} /> 
      </>
    );
  }

  return (
    <>
      <Title>TransactionForm</Title>

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
