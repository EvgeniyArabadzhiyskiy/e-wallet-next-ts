import { ITransaction, ITransactions, RemoveTransaction } from "@/src/types/transactions";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import { deleteTransaction, getAllTransactions } from "./transaction";
import { trpc } from "../trpc/client";

export const useRemoveTransaction = () => {
  const queryClient = useQueryClient();

  const mutation = trpc.transactionRouter.daleteTransaction.useMutation({
    onSuccess: async (data) => {
      const infiniteData = queryClient
      .getQueryData<InfiniteData<ITransactions>>(
        [["transactionRouter", "getAllTransactions"],{ input: { limit: 10 }, type: "infinite" }]
      );
      
      if (!infiniteData) return;

      const lastPageNumber = infiniteData.pages.length;

      const res = await fetch("/api/getTransactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ page: lastPageNumber })
      });

      const { transactions } = await res.json() as ITransactions;

      const lastTransaction = transactions?.pop();

      const { transactions: allTransaction } = infiniteData.pages
      .reduce((acc, page) => {
            return {
              transactions: [...acc.transactions, ...page.transactions],
            };
          },
          { transactions: []}
        );

      const filtredTransaction = allTransaction.filter(
        (item) => item?.id !== data.id
      );

      const isLastPage = allTransaction.length / lastPageNumber !== 10;

      if (!isLastPage) {
        lastTransaction && filtredTransaction.push(lastTransaction);
      }

      const transactionArrays = [];

      for (let i = 0; i < filtredTransaction.length; i += 10) {
        transactionArrays.push(filtredTransaction.slice(i, i + 10));
      }

      const newPages = transactionArrays.flat();

      queryClient.setQueryData<InfiniteData<ITransactions>>(
        [["transactionRouter", "getAllTransactions"],{ input: { limit: 10 }, type: "infinite" }],
        (prev) => {
          if (prev) {
            return {
              ...prev,
              pages: [{ transactions: newPages }],
            };
          }
        }
      );

      queryClient.invalidateQueries({ queryKey: [['transactionRouter', 'getBalance'], { type: "query" }] });
      // queryClient.invalidateQueries({ queryKey: ["Statistics"] });
    },
  });


  
  // const mutation = useMutation<RemoveTransaction, Error, string>({
  //   mutationFn: (id) => deleteTransaction(id, token),

  //   onSuccess: async (data) => {
  //     const infiniteData = queryClient.getQueryData<InfiniteData<ITransactions>>(["TransactionsList"]);

  //     if (!infiniteData) {
  //       return;
  //     }

  //     const lastPageNumber = infiniteData.pages.length;
  //     const { transactions } = await getAllTransactions(token, lastPageNumber);

  //     const lastTransaction = transactions?.pop();

  //     const { transactions: allTransaction, userBalance } = infiniteData.pages.reduce((acc, page) => {
  //       return {
  //         transactions: [...acc.transactions, ...page.transactions],
  //         userBalance: page.userBalance,
  //       }
  //     },{ transactions: [], userBalance: 0 });

  //     const filtredTransaction = allTransaction.filter((item) => item._id !== data._id)

  //     const isLastPage = (allTransaction.length / lastPageNumber) !== 10

  //     if (!isLastPage) {
  //       lastTransaction && filtredTransaction.push(lastTransaction);
  //     }

  //     const transactionArrays = [];

  //     for (let i = 0; i < filtredTransaction.length; i += 10) {
  //       transactionArrays.push(filtredTransaction.slice(i, i + 10));
  //     }

  //     const newPages = transactionArrays.map((transactions) => ({
  //       transactions,
  //       userBalance,
  //     }));

  //     queryClient.setQueryData<InfiniteData<ITransactions>>( ["TransactionsList"], (prev) => {
  //         if (prev) {
  //           return {
  //             ...prev,
  //             pages: newPages,
  //           };
  //         }
  //       }
  //     );

  //     queryClient.invalidateQueries({ queryKey: ["Balance"] });
  //     queryClient.invalidateQueries({ queryKey: ["Statistics"] });
  //   },
  // });

  return mutation;
};
