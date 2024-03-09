import { trpc } from "../trpc/client";
import { useEffect, useMemo, useRef } from "react";

export const useLazyTransactions = () => {
  const listElem = useRef<HTMLUListElement>(null);
  const observerElem = useRef<HTMLDivElement>(null);

  const queryData = trpc.transactionRouter.getAllTransactions.useInfiniteQuery({ limit: 10 }, {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      return lastPage?.transactions.length === 10 ? nextPage  : undefined;
    },
  })

  const { data, fetchNextPage, hasNextPage } = queryData;

  useEffect(() => {
    const target = observerElem.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
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