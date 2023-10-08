import {  ITransactions, RemoveTransaction } from "@/src/types/transactions";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import { deleteTransaction, getAllTransactions } from "./transaction";

export const useRemoveTransaction = () => {
  const { token } = useUser();
  const queryClient = useQueryClient();

  const mutation = useMutation<RemoveTransaction, Error, string>({
    mutationFn: (id) => deleteTransaction(id, token),

    onSuccess: async (data) => {
      const infiniteData = queryClient.getQueryData<InfiniteData<ITransactions>>(["TransactionsList"]);

      if (!infiniteData) {
        return;
      }

      const lastPageNumber = infiniteData.pages.length;
      const { transactions } = await getAllTransactions(token, lastPageNumber);
      const lastTransaction = transactions.pop();

      const { transactions: allTransaction, userBalance } = infiniteData.pages.reduce((acc, page) => {
        return {
          transactions: [...acc.transactions, ...page.transactions],
          userBalance: page.userBalance,
        }
      },{ transactions: [], userBalance: 0 });


      const filtredTransaction = allTransaction.filter((item) => item._id !== data._id)

      const isLastPage = (allTransaction.length / lastPageNumber) !== 10

      if (!isLastPage) {
        lastTransaction && filtredTransaction.push(lastTransaction);
      }
      
      const transactionArrays = [];

      for (let i = 0; i < filtredTransaction.length; i += 10) {
        transactionArrays.push(filtredTransaction.slice(i, i + 10));
      }
      
      const newPages = transactionArrays.map((transactions) => ({
        transactions,
        userBalance,
      }));
      
      queryClient.setQueryData<InfiniteData<ITransactions>>( ["TransactionsList"], (prev) => {
          if (prev) {
            return {
              ...prev,
              pages: newPages,
            };
          }
        }
      );

      queryClient.invalidateQueries({ queryKey: ["Balance"] });
      queryClient.invalidateQueries({ queryKey: ["Statistics"] });
    },
  });

  return mutation;
};
