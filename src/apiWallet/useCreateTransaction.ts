import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { ITransactions } from "../types/transactions";
import { trpc } from "../trpc/client";
import { toast } from "sonner";
import { TRANSACTION_KEY } from "../constants/modalKey";
import { useAnimatedCloseModal } from "../hooks/useAnimatedCloseModal";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  const animatedCloseModal = useAnimatedCloseModal(TRANSACTION_KEY);

  const mutation = trpc.transactionRouter.createTransaction.useMutation({
    onSuccess: (data) => {
     
      let newData = data;

      queryClient.setQueryData<InfiniteData<ITransactions>>(
        [["transactionRouter", "getAllTransactions"],{ input: { limit: 10 }, type: "infinite" }],
         (prev) => {
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

      queryClient.invalidateQueries({ queryKey: [['transactionRouter', 'getBalance']] });
      queryClient.invalidateQueries({ queryKey: [['statisticRouter', 'getStatistic']] });
      animatedCloseModal();

      toast.success("Transaction created");
    },
  })

  return mutation;
};
