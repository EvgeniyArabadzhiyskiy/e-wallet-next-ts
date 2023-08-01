
import { ITransactions, RemoveTransaction } from "@/src/types/transactions";
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
      const infiniteData = queryClient.getQueryData<
        InfiniteData<ITransactions>
      >(["TransactionsList"]);

      if (!infiniteData) {
        return;
      }

      const lastPageNumber = infiniteData.pages.length;

      const { transactions } = await getAllTransactions(
        token,
        lastPageNumber
      );

      const lastTransaction = transactions.pop();

      const updatedPages = infiniteData.pages.map((page) => {
        const newCache = page.transactions.filter(
          (item) => item._id !== data._id
        );

        return {
          ...page,
          transactions: newCache,
        };
      });

      const lastPagesIdx = updatedPages.length - 1;
      lastTransaction &&
        updatedPages[lastPagesIdx].transactions.push(lastTransaction);

      queryClient.setQueryData<InfiniteData<ITransactions>>(
        ["TransactionsList"],
        (prev) => {
          if (prev) {
            return {
              ...prev,
              pages: updatedPages,
            };
          }
        }
      );

      queryClient.invalidateQueries({ queryKey: ["Balance"] });
    },
  });

  return mutation;
};
