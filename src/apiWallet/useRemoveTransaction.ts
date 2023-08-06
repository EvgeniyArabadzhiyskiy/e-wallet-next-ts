
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
      console.log("onSuccess:  infiniteData:", infiniteData);

      if (!infiniteData) {
        return;
      }

      const lastPageNumber = infiniteData.pages.length;
      // console.log("onSuccess:  lastPageNumber:", lastPageNumber);

      const { transactions, userBalance } = await getAllTransactions(
        token,
        lastPageNumber
        );
        
      
      const lastTransaction = transactions.pop()
      // console.log("onSuccess:  lastTransaction:", lastTransaction);


      let balance = 0
      let allTransactions: ITransaction[][] = []

      infiniteData.pages.forEach((page) => {
        // console.log("infiniteData.pages.forEach  page:", page);
        balance = page.userBalance;
        allTransactions.push(page.transactions);
      })

      

      const ddd = allTransactions.flat().filter((item) => item._id !== data._id)

      const isLong = ((ddd.length + 1) / lastPageNumber) === 10

      if (isLong) {
        lastTransaction && ddd.push(lastTransaction)
        
      }
      

      function splitArray(arr: any, columns: number) {
        const result = [];
        for (let i = 0; i < arr.length; i += columns) {
          result.push(arr.slice(i, i + columns));
        }
        return result;
      }

      const arrayOfArrays = splitArray(ddd, 10)

      const newPages = arrayOfArrays.map((item) => {
        return{
          transactions: item,
          userBalance: balance,
        }
      })
      //  console.log("newPages  newPages:", newPages);
       
      

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




      queryClient.setQueryData<InfiniteData<ITransactions>>(
        ["TransactionsList"],
        (prev) => {
          if (prev) {
            // return {
            //   ...prev,
            //   pages: updatedPages,
            // };

            return {
              ...prev,
              pages: newPages,
            };
          }
        }
      );

      queryClient.invalidateQueries({ queryKey: ["Balance"] });
    },
  });

  return mutation;
};
