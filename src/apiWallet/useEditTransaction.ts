import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import { ChangedTransaction, ITransactions } from "../types/transactions";
import { ITransactionData } from "../types/transactionValue";
import { editTransaction } from "./transaction";
import { useGlobalState } from "../components/GlobalProvider/GlobalProvider";

export const useEditTransaction = (editId: string) => {
  const { token } = useUser();
  const queryClient = useQueryClient();
  const { setModalToggle } = useGlobalState();

  const mutation = useMutation<ChangedTransaction, Error, ITransactionData>({
    mutationFn: (transaction) => editTransaction(editId, transaction, token),

    onSuccess: (data) => {
      queryClient.setQueryData<InfiniteData<ITransactions>>(
        ["TransactionsList"],
        (prev) => {
          if (!prev) {
            return undefined;
          }

          const updatedPages = prev.pages.map((page) => {
            const newCache = page.transactions.map((transaction) => {
              if (transaction._id === data._id) {
                return data;
              }

              return transaction;
            });

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
  });

  return mutation;
};
