"use client";

import { ITransactionValue } from "@/src/types/transactionValue";
import FormContainer from "../FormContainer/FormContainer";
import { Title } from "./TransactionForm.styled";
import { getTypeOperation } from "@/src/helpers/getTypeOperation";
import TransactionFormFields from "../TransactionFormFields/TransactionFormFields";
import { Form, Formik, FormikProps, FormikHelpers } from "formik";
import { ILoginValues } from "@/src/types/loginValues";
import { createTransaction } from "@/src/apiWallet/createTransaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import schema from "@/src/helpers/formValidation";
import axios from "axios";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";

const transData = {
  amount: 500,
  category: "Next Js",
  typeOperation: "expense",
  comment: "Fruits",
  // date: "Sun Apr 09 2023 16:49:02 GMT+0300 (Восточная Европа, летнее время)",
  // date: "Wed Apr 05 2023 21:41:36 GMT+0300 (Восточная Европа, летнее время)",
  date: new Date().toString(),
};

// export const create = async (transaction: any) => {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTM0ZGFhMTQyNGVhZDExNWVhNTJhNSIsImlhdCI6MTY4OTE0NjM0NSwiZXhwIjoxNjkwMzU1OTQ1fQ.GuTYaKcbkLR4odPZ3iJBd6ORIDPHZaAXwVKRfmSpoco";

//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//   const { data } = await axios.post(`${BASE_URL}${TRANSACTIONS}`, transaction);
//   console.log("SecondPage  data:", data);
//   return data;
// };

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

  const mutation = useMutation({
    mutationFn: createTransaction,
    
    onSuccess: (data) => {
      console.log("onSuccess  data:", data);
    },
  });

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

    mutation.mutate(transaction);
  };

  return (
    <>
      <Title>TransactionForm</Title>

      <FormContainer<ITransactionValue>
        initialValues={initialValues}
        validationSchema={schema.transactionShema}
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
