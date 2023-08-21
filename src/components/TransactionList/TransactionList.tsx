"use client";

import Link from "next/link";
import { Title } from "../Title/Title.styled";
import { useLazyTransactions } from "@/src/apiWallet";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { useBalanceList } from "@/src/hooks/useBalanceList";
import HomeTableDesctop from "../HomeTab/HomeTableDesctop/HomeTableDesctop";
import { InfiniteData, useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { Media } from "@/src/lib/media";
import HomeTableMobile from "../HomeTab/HomeTableMobile/HomeTableMobile";
import TransactionTable from "../TransactionTable/TransactionTable";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import { ITransactions } from "@/src/types/transactions";
import { getStatistics } from "@/src/apiWallet/statistic";

// const TransactionList = () => {
//   const queryClient = useQueryClient();

//   const {
//     data: allTransactions = [],
//     isFetching,
//     listElem,
//     observerElem,
//   } = useLazyTransactions();

//   const { isModalOpen, setModalToggle } = useGlobalState();

//   const balanceList = useBalanceList(allTransactions);

//   const Balance = queryClient.getQueriesData<any>(["Balance"]);
//   console.log("TransactionList:", Balance[0][1]);

//   const TransactionsList = queryClient.getQueriesData<any>(["TransactionsList"]);
//   console.log("Header  queryUserData:", TransactionsList[0][1]?.pages);

//   return (
//     <>
//       <button type="button" onClick={() => setModalToggle("transaction")}>
//         OPEN
//       </button>

//       <TransactionTable 
//         listElem={listElem}
//         observerElem={observerElem}
//         balances={balanceList}
//         transactions={allTransactions}
//       />
//     </>
//   );
// };

// export default TransactionList;

//=================================================================================
const TransactionList = ({ authToken }: { authToken?: string | undefined }) => {
  // const { authToken } = parseCookies();
  const queryClient = useQueryClient();

  const listElem = useRef<HTMLUListElement>(null);
  const observerElem = useRef<HTMLDivElement>(null);

  const [pageNum, setPageNum] = useState(1);
  const session = useSession();
  const userToken = session.data?.token;

  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["TransactionsList"],
    queryFn: ({pageParam = 1}) => {
      // console.log("TransactionList  p:", p);
      
      return getAllTransactions(userToken, pageParam)
    },
    getNextPageParam: (lastPage, allPages) => {
      // console.log("TransactionList  lastPage:", lastPage);
      const nextPage = allPages.length + 1;

      return lastPage.transactions.length !== 0 ? nextPage : undefined;
    },

    staleTime: Infinity,
    enabled: !!userToken,
    // select: (data) => {
    //   const transactions = data.pages.map(({ transactions }) => transactions).flat();
    //   return {
    //     ...data,
    //     pages: transactions
    //   }
    // }
    onSuccess: () => {
      queryClient.setQueryData<InfiniteData<ITransactions>>(["TransactionsList"], (prev) => {
        if (!prev) {
          return undefined;
        }
        // console.log("TransactionList  prev:", prev.pageParams.slice(1));
        return {
          ...prev,
          pageParams: [1, ...prev.pageParams.slice(1)]
        };
      });
    }
  });

  const transactionsList = queryClient.getQueriesData(['TransactionsList'])
  console.log("TransactionList:", transactionsList);
  

  const queryData = useQuery({
    queryKey: ["Statistics", { month: "7", year: '2023' }],
    queryFn: () => getStatistics(userToken, { month: "7", year: '2023' }),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!userToken,
  
  });

  const stat = queryClient.getQueriesData(['Statistics'])
  // console.log("TransactionList  stat:", stat);

 

  const allTransactions = useMemo(() => {
    return data?.pages.map(({ transactions }) => transactions).flat();
  }, [data?.pages]);

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

  

  return (
    <div style={{background: "white",}}>
      <h1>HOME PAGE</h1>
      <Title>Title</Title>
      <br/>
      <Link href="/home/statistic">Statistic</Link>
      <br/>
      {/* <button type="button" onClick={() => fetchNextPage()}>
        Next Page
      </button> */}

      <button type="button" onClick={() => setPageNum((p) => p + 1)}>
        Click
      </button>

      <ul ref={listElem} style={{ height: 240, overflowY: "scroll" }}>
        { allTransactions?.map((item) => {
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
    </div>
  );
};

export default TransactionList;

//=======================================================================

// const TransactionList = ({ authToken }: { authToken?: string | undefined }) => {
//   const observerElem = useRef<any>(null);

//   const [pageNum, setPageNum] = useState(0);
//   const session = useSession();
//   const userToken = session.data?.token;

//   const { data: {transactions} = {} } = useQuery({
//     queryKey: ["Transactions", pageNum],
//     queryFn: () => getAllTransactions(userToken, pageNum),
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


//   return (
//     <div style={{ background: "white" }}>
//       <h1>HOME PAGE</h1>
//       <Title>Title</Title>
//       <br/>
//       <Link  href="/home/statistic">Statistic</Link>

//       <ul style={{ height: 250, overflowY: "scroll", }}>
//         {transactions &&
//           transactions.map((item) => {
//             return (
//               <li style={{ height: 50}} key={item._id}>
//                 {item.category}
//               </li>
//             );
//           })}

//         <div ref={observerElem} style={{ height: 50, background: "tomato" }}>
//           Observer Target
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default TransactionList;
