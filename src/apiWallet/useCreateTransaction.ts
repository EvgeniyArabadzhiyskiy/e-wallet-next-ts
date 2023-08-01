import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import {
  ITransaction,
  ITransactions,
  NewTransaction,
} from "../types/transactions";
import { ITransactionData } from "../types/transactionValue";
import { createTransaction } from "./transaction";
import { useGlobalState } from "../components/GlobalProvider/GlobalProvider";
import { Dispatch, SetStateAction } from "react";

export const useCreateTransaction = (setError: Dispatch<SetStateAction<Error | null>>) => {
  const { token } = useUser();
  const queryClient = useQueryClient();
  const { setModalToggle } = useGlobalState();

  const mutation = useMutation<NewTransaction, Error, ITransactionData>({
    // createTransaction должна возвращать тип Promise<NewTransaction>
    mutationFn: (transaction) => createTransaction(transaction, token),

    onSuccess: (data) => {
      const { position, updatedAt, ...props } = data;
      const createTransaction: ITransaction = props;

      let newData = createTransaction;

      queryClient.setQueryData<InfiniteData<ITransactions>>(["TransactionsList"], (prev) => {
          if (!prev) {
            return undefined;
          }

          const updatedPages = prev.pages.map((page) => {
            const newCache = [newData, ...page.transactions].sort(
              (a, b) => Date.parse(b.date) - Date.parse(a.date)
            );

            const lastTransaction = newCache.pop();

            if (lastTransaction) {
              newData = lastTransaction;
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
        }
      );

      queryClient.invalidateQueries({ queryKey: ["Balance"] });
      setModalToggle("transaction");
    },

    onError: (error) => {
      console.log("TransactionForm  error:", error.message);
      setError(error);
    },
  });

  return mutation;
};
