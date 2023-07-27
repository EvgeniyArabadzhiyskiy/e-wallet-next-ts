"use client";

import { FormikHelpers } from "formik";
import { useSession } from "next-auth/react";
import {
  InfiniteData,
  Updater,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { transactionShema } from "@/src/helpers/formValidation";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
// import { createTransaction } from "@/src/apiWallet/createTransaction";
import {
  ITransactionData,
  ITransactionValue,
} from "@/src/types/transactionValue";

import FormContainer from "../FormContainer/FormContainer";
import TransactionFormFields from "../TransactionFormFields/TransactionFormFields";
import { Title } from "./TransactionForm.styled";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import axios from "axios";
import { useState } from "react";
import {
  ITransaction,
  ITransactions,
  NewTransaction,
} from "@/src/types/transactions";
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

type OOOO = Updater<{
  pages: {
      transactions: ITransaction[];
      userBalance: number;
  }[] | undefined;
  pageParams: unknown[];
} | undefined, 
{ 
  pages: {
    transactions: ITransaction[];
    userBalance: number;
  }[] | undefined;
  pageParams: unknown[];
} | undefined>

export default function TransactionForm({ isIncome, setIsIncome }: IProps) {
  const { token } = useUser();
  const queryClient = useQueryClient();

  const { setModalToggle } = useGlobalState();
  const [error, setError] = useState<Error | null>(null);

  const initialValues: ITransactionValue = {
    comment: "",
    amount: "",
    category: "",
    date: new Date().toString(),
  };

  const mutation = useMutation<NewTransaction, Error, ITransactionData>({
    // createTransaction должна возвращать тип Promise<NewTransaction>
    mutationFn: (transaction) =>
      apiWallet.createTransaction(transaction, token),

    onSuccess: (data) => {
      const { position, updatedAt, ...props } = data;
      const createTransaction: ITransaction = props;

      let newData = createTransaction;

      queryClient.setQueryData<InfiniteData<ITransactions>>(["TransactionsList"] ,(prev) => {
        if (!prev) {
          return undefined
        }
          
        const updatedPages = prev.pages.map((page) => {
          const newCache = [newData, ...page.transactions].sort(
            (a, b) => Date.parse(b.date) - Date.parse(a.date)
          );

          const lastEl = newCache.pop();

          if (lastEl) {
            newData = lastEl
          }

          return {
            ...page,
            transactions: newCache,
          };
        });

        return {
          ...prev,
          pages: updatedPages,
        };
        

         
      });

      queryClient.invalidateQueries({ queryKey: ["Balance"] });
      setModalToggle("transaction");
    },

    onError: (error) => {
      console.log("TransactionForm  error:", error.message);
      setError(error);
    },
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
        <CancelButton
          cancelText="cancel"
          onClick={() => setModalToggle("transaction")}
        />
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
