import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { ITransactions } from "../types/transactions";
import { trpc } from "../trpc/client";
import { useModalWindow } from "../hooks/useModalWindow";

export const useEditTransaction = () => {
  const queryClient = useQueryClient();
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  const mutation = trpc.transactionRouter.editTransaction.useMutation({
    onSuccess: (data) => {

      queryClient.setQueryData<InfiniteData<ITransactions>>(
        [["transactionRouter", "getAllTransactions"],{ input: { limit: 10 }, type: "infinite" }],
        (prev) => {
          if (!prev) {
            return undefined;
          }

          const updatedPages = prev.pages.map((page) => {
            const newCache = page.transactions.map((transaction) => {
              if (transaction.id === data.id) {
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

      queryClient.invalidateQueries({ queryKey: [['transactionRouter', 'getBalance']] });
      queryClient.invalidateQueries({ queryKey: [['statisticRouter', 'getStatistic']] });

      setModalToggle("transaction");
    },
  })

  return mutation;
};
