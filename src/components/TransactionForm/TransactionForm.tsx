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
import { Dispatch, SetStateAction, useState } from "react";
import {
  ChangedTransaction,
  ITransaction,
  ITransactions,
  NewTransaction,
} from "@/src/types/transactions";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import { useUser } from "@/src/hooks/useUser";
import { fetcher } from "@/src/helpers/fetcher";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";



const transData = {
  amount: "500",
  category: "WODA",
  typeOperation: "expense",
  comment: "Fruits",
  // date: "Sun Apr 09 2023 16:49:02 GMT+0300 (Восточная Европа, летнее время)",
  date: "Wed Apr 05 2023 21:41:37 GMT+0300 (Восточная Европа, летнее время)",
  // date: new Date().toString(),
};

const editTransaction = async (id: string, transation: any, token: string | undefined) => {
  const options: RequestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(transation),
  }

  const data = await fetcher<ChangedTransaction>(`${BASE_URL}${TRANSACTIONS}/edit/${id}`, options)

  console.log("editTransaction  data:", data);
  return data
}

interface IProps {
  isIncome: boolean;
  setIsIncome: Dispatch<SetStateAction<boolean>>;
  modalKey: string;
  editId: string;
}

function TransactionForm({ isIncome, setIsIncome, modalKey, editId }: IProps) {
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

  const setTitle = (modalKey: string) => {
    switch (modalKey) {
      case "ADD":
        return "Add Transaction";

      case "EDIT":
        return "Edit Transaction";
    
      default:
        return "Unknown Transaction";
    }
    
  }
   
  const { mutate: edit } = useMutation<ChangedTransaction, Error, ITransactionData>({
    mutationFn: (transaction) => editTransaction(editId, transaction, token),

    onSuccess: () => {
      queryClient.invalidateQueries(["TransactionsList"])

      setModalToggle("transaction");
    }


  })

  const { mutate: create} = useMutation<NewTransaction, Error, ITransactionData>({
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

          const lastTransaction = newCache.pop();

          if (lastTransaction) {
            newData = lastTransaction
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

    if (modalKey === "ADD") {
      create(transaction);
      resetForm();
      // setModalToggle("transaction");
    }

    if (modalKey === "EDIT") {
      edit(transaction);
      resetForm();
    }
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
      <Title>{setTitle(modalKey)}</Title>

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