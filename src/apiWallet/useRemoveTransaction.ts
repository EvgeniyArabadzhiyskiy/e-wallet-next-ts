import { trpc } from "../trpc/client";
import { ITransactions } from "@/src/types/transactions";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRemoveTransaction = (lastPageNumber: number) => {
  const queryClient = useQueryClient();

  const mutation = trpc.transactionRouter.daleteTransaction.useMutation({
    onSuccess: async (data) => {
      const infiniteData = queryClient
      .getQueryData<InfiniteData<ITransactions>>(
        [["transactionRouter", "getAllTransactions"],{ input: { limit: 10 }, type: "infinite" }]
      );
      
      if (!infiniteData) return;

      const { transactions: allTransactions } = infiniteData.pages
      .reduce((acc, page) => {
            return {
              transactions: [...acc.transactions, ...page.transactions],
            };
          },
          { transactions: []}
        );

      const filtredTransaction = allTransactions.filter(
        (item) => item?.id !== data.remoteTransaction.id
      );

      const isLastPage = allTransactions.length / lastPageNumber !== 10;

      if (!isLastPage && data.latestTransaction) {
        data.latestTransaction && filtredTransaction.push(data.latestTransaction);
      }

      const transactionArrays = [];

      for (let i = 0; i < filtredTransaction.length; i += 10) {
        transactionArrays.push(filtredTransaction.slice(i, i + 10));
      }

      if (filtredTransaction.length === 0) {
        transactionArrays.push([]);
      }

      const newPages = transactionArrays.map((pageTransactions) => {
        return {
          transactions: pageTransactions,
        }
      });

      queryClient.setQueryData<InfiniteData<ITransactions>>(
        [["transactionRouter", "getAllTransactions"],{ input: { limit: 10 }, type: "infinite" }],
        (prev) => {
          if (prev) {
            return {
              ...prev,
              pages: newPages,
            };
          }
        }
      );

      queryClient.invalidateQueries({ queryKey: [['transactionRouter', 'getBalance']] });
      queryClient.invalidateQueries({ queryKey: [['statisticRouter', 'getStatistic']] });

      toast.success("Transaction deleted");
    },
  });

  return mutation;
};
