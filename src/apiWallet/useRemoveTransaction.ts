
import { ITransaction, ITransactions, RemoveTransaction } from "@/src/types/transactions";
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
       
      

      // const lastPagesIdx = infiniteData.pages.length - 1;
      // lastTransaction &&
      //  allTransactions.push(lastTransaction)

      // const updatedPages = infiniteData.pages.map((page) => {
      //   const newCache = page.transactions.filter(
      //     (item) => item._id !== data._id
      //   );

      //   return {
      //     ...page,
      //     transactions: newCache,
      //   };
      // });

      // const lastPagesIdx = updatedPages.length - 1;
      // lastTransaction &&
      //   updatedPages[lastPagesIdx].transactions.push(lastTransaction);




      queryClient.setQueryData<InfiniteData<ITransactions>>( ["TransactionsList"], (prev) => {
          if (prev) {
            return {
              ...prev,
              pages: newPages,
              // pages: updatedPages,
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
