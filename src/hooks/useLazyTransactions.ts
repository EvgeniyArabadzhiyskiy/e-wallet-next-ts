import { useSession } from "next-auth/react";
import { useEffect, useMemo, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { apiWallet } from "../apiWallet/apiWallet";
import { useUser } from "./useUser";
import { ITransactions } from "../types/transactions";

export const useLazyTransactions = () => {
  const listElem = useRef<HTMLUListElement>(null);
  const observerElem = useRef<HTMLDivElement>(null);

  const { token } = useUser();

  const queryData = useInfiniteQuery<ITransactions, Error, ITransactions, string[]>({
    queryKey: ["TransactionsList"],
    queryFn: ({ pageParam = 1 }) =>
      apiWallet.getAllTransactions(token, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      return lastPage.transactions.length !== 0 ? nextPage : undefined;
    },

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
      { root: listElem.current, rootMargin: "10px" }
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
