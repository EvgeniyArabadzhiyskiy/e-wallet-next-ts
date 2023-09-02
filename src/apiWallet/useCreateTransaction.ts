import { useUser } from "../hooks/useUser";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  ITransaction,
  ITransactions,
  NewTransaction,
} from "../types/transactions";
import { createTransaction } from "./transaction";
import { ITransactionData } from "../types/transactionValue";
import { useGlobalState } from "../components/GlobalProvider/GlobalProvider";

export const useCreateTransaction = () => {
  const { token } = useUser();
  const queryClient = useQueryClient();
  const { setModalToggle } = useGlobalState();

  const mutation = useMutation<NewTransaction, Error, ITransactionData>({
    // createTransaction должна возвращать тип Promise<NewTransaction>
    mutationFn: (transaction) => createTransaction(transaction, token),

    onSuccess: (data) => {
      
      // const createdDate = {
      //   month: new Date(data.date).getMonth().toString(),
      //   year: new Date(data.date).getFullYear().toString(),
      // }

      const { position, updatedAt, ...props } = data;
      const createTransaction: ITransaction = props;

      let newData = createTransaction;

      queryClient.setQueryData<InfiniteData<ITransactions>>(["TransactionsList"], (prev) => {
          if (!prev) {
            return undefined;
          }

          const updatedPages = prev.pages.map((page) => {
            const newCache = [newData, ...page.transactions].sort(
              (a, b) => Date.parse(b.date) - Date.parse(a.date));
              
            if (newCache.length > 10) {
              const lastTransaction = newCache.pop();
              
              if (lastTransaction) {
                newData = lastTransaction;
              }
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
      queryClient.invalidateQueries({ queryKey: ["Statistics"] });
      // queryClient.invalidateQueries({ queryKey: ["Statistics", { month: "", year: "" }] });
      // queryClient.invalidateQueries({ queryKey: ["Statistics", createdDate] });
      setModalToggle("transaction");
    },
  });

  return mutation;
};
