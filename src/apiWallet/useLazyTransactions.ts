import { useUser } from "../hooks/useUser";
import { useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ITransactions } from "../types/transactions";
import { getAllTransactions } from "./transaction";

export const useLazyTransactions = () => {
  const listElem = useRef<HTMLUListElement>(null);
  const observerElem = useRef<HTMLDivElement>(null);

  const { token } = useUser();

  const queryData = useInfiniteQuery<ITransactions, Error, ITransactions, string[]>({
    queryKey: ["TransactionsList"],
    queryFn: ({ pageParam = 1 }) =>
      getAllTransactions(token, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      // console.log("length !== 0:", lastPage.transactions.length !== 0);
      return lastPage.transactions.length === 10 ? nextPage : undefined;
    },

    // select: (data) => {
    //   const transactions =  data.pages.map(el => el.transactions).flat();

    //   return {
    //     pageParams: data.pageParams,
    //     pages: transactions,
    //   }
    // },


    staleTime: Infinity,
    enabled: !!token,
  });

  const { data, fetchNextPage, hasNextPage } = queryData

  useEffect(() => {
    const target = observerElem.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      // { root: listElem.current, rootMargin: "10px" }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  const allTransactions = useMemo(() => {
    return data?.pages.map(({ transactions }) => transactions).flat();
  }, [data?.pages]);

  return { 
    ...queryData,
    data: allTransactions,
    listElem, 
    observerElem };
};
