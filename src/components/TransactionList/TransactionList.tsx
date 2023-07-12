"use client";

import Link from "next/link";
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { parseCookies } from "nookies";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useSession } from "next-auth/react";
import { Title } from "../Title/Title.styled";
import { ITransaction, ITransactions } from "@/src/types/transactions";
import { isITransactions } from "@/src/helpers/isITransactions";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import { useLazyTransactions } from "@/src/hooks/useLazyTransactions";

const getAllTransactions = async (authToken: any, pageNum: number) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`,
      options
    );

    if (!response.ok) {
      const errorMessage = response.statusText || "An error occurred";
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!isITransactions(data)) {
      throw new Error("Invalid data format");
    }

    const transactions: ITransactions = data;

    return transactions;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message || "An error occurred");
  }
};

const TransactionList = ({ authToken }: { authToken?: string | undefined }) => {
  // const { authToken } = parseCookies();
  // const queryClient = useQueryClient();

  // const { data, isFetching, listElem, observerElem } = useLazyTransactions()

  const listElem = useRef<HTMLUListElement>(null);
  const observerElem = useRef<HTMLDivElement>(null);

  const [pageNum, setPageNum] = useState(1);
  const session = useSession();
  const userToken = session.data?.user.token;


  // const { data, isError, error, isFetching, refetch } = useQuery({
  //   queryKey: ["Transactions", pageNum],
  //   queryFn: () => apiWallet.getAllTransactions(userToken, pageNum), // ИЛИ authToken
  //   staleTime: Infinity,
  //   refetchOnWindowFocus: false,
  //   retry: 0,
  //   enabled: !!userToken, // При authToken  Удалить
  // });

  const { data: { pages } = {}, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["TransactionsList"],
    queryFn: ({ pageParam = 1 }) =>
      apiWallet.getAllTransactions(userToken, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      return lastPage.transactions.length !== 0 ? nextPage : undefined;
    },

    staleTime: Infinity,
    enabled: !!userToken,
    select: (data) => {
      const transactions = data.pages.map(({ transactions }) => transactions).flat();
      return {
        ...data,
        pages: transactions
      }
    }
  });


  // console.log("TransactionList  data:", allTransactions?.pages);
  // console.log("TransactionList  data:", allTransactions);

  // const allTransactions = data?.pages.map(({transactions}) => transactions).flat();
  // console.log("TransactionList  allTransactions:", allTransactions);

  // const allTransactions = useMemo(() => {
  //   return data?.pages.map(({ transactions }) => transactions).flat();
  // }, [data?.pages]);

  //   const queryUserData = queryClient.getQueriesData<any>(["Transactions"]);
  //   console.log("Header  queryUserData:", queryUserData);

  // const handleObserver = useCallback(
  //   (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  //     const { isIntersecting, target } = entries[0];

  //     if (isIntersecting && hasNextPage) {
  //       fetchNextPage();
  //       // console.log("Target is Intersect");
  //       // setPageNum((p) => p + 1)
  //     }
  //   },
  //   [fetchNextPage, hasNextPage]
  // );

  useEffect(() => {
    const target = observerElem.current;

    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    }, 
    { root: listElem.current, rootMargin: "10px" });

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  // if (isError) {
  //   return (
  //     <>
  //       <h1>{(error as Error).message}</h1>
  //       <button onClick={() => refetch()}>Retry</button>
  //     </>
  //   );
  // }

  console.log("Rerender");

  return (
    <>
      <h1>HOME PAGE</h1>
      <Title>Title</Title>
      <Link href="/">HOME</Link>
      {/* <button type="button" onClick={() => fetchNextPage()}>
        Next Page
      </button> */}

      <button type="button" onClick={() => setPageNum((p) => p + 1)}>
        Click
      </button>

      <ul ref={listElem} style={{ height: 240, overflowY: "scroll" }}>
        {pages &&
          pages.map((item) => {
            return (
              <div key={item._id}>
                {isFetching ? (
                  <div style={{ height: 50 }}>Loading Transactions...</div>
                ) : (
                  <div style={{ height: 50 }}>{item.category}</div>
                )}
              </div>
            );
          })}

        <div ref={observerElem} style={{ height: 50, background: "tomato" }}>
          Observer Target
        </div>
      </ul>
    </>
  );
};

export default TransactionList;

// const TransactionList = ({ authToken }: { authToken?: string | undefined }) => {
//   const observerElem = useRef<any>(null);

//   const [pageNum, setPageNum] = useState(1);
//   const session = useSession();
//   const userToken = session.data?.user.token;

//   const { data: {transactions} = {} , isError, error, isFetching, refetch } = useQuery({
//     queryKey: ["Transactions", pageNum],
//     queryFn: () => apiWallet.getAllTransactions(userToken, pageNum),
//     staleTime: Infinity,
//     refetchOnWindowFocus: false,
//     retry: 0,
//     enabled: !!userToken,
//     // select: (data) => {
//     //   console.log("TransactionList  data:", data);
      
//     //   return data.transactions
//     // }
//   });
//   console.log("TransactionList  transactions:", transactions);

//   const handleObserver = useCallback(
//     (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
//       const { isIntersecting, target } = entries[0];
//       console.log("TransactionList  isIntersecting:", isIntersecting);

//       if (isIntersecting) {
//         setPageNum((p) => p + 1)
//       }
//     },
//     []
//   );

//   useEffect(() => {
//     const target = observerElem.current;

//     const observer = new IntersectionObserver(handleObserver, {
//       rootMargin: "10px",
//     });
//     observer.observe(target);

//     return () => {
//       observer.unobserve(target);
//     };
//   }, [handleObserver]);

//   // if (isFetching) {
//   //   return <h1>Loading Transactions...</h1>;
//   // }

//   // if (isError) {
//   //   return (
//   //     <>
//   //       <h1>{(error as Error).message}</h1>
//   //       <button onClick={() => refetch()}>Retry</button>
//   //     </>
//   //   );
//   // }

//   console.log("Rerender");

//   return (
//     <>
//       <h1>HOME PAGE</h1>
//       <Title>Title</Title>
//       <Link href="/">HOME</Link>

//       <ul style={{ height: 250, overflowY: "scroll" }}>
//         {transactions &&
//           transactions.map((item) => {
//             return (
//               <li style={{ height: 50 }} key={item._id}>
//                 {item.category}
//               </li>
//             );
//           })}

//         <div ref={observerElem} style={{ height: 50, background: "tomato" }}>
//           Observer Target
//         </div>
//       </ul>
//     </>
//   );
// };

// export default TransactionList;
