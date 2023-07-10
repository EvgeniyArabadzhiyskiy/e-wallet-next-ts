import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { Hydrate, dehydrate, useQuery } from "@tanstack/react-query";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import getQueryClient from "@/src/lib/getQueryClient";
import TransactionList from "@/src/components/TransactionList/TransactionList";
import ModalBox from "@/src/components/ModalBox";
import ModalLogOut from "@/src/components/ModalLogOut/ModalLogOut";

// const getAllTransactions = async (authToken: string | undefined, pageNum: number) => {
//   const options: RequestInit = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${authToken}`
//     },
//     cache: "no-store",
//   };

//   try {
//     const data = await fetcher<any>(`${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`, options);

//     if (!isITransactions(data)) {
//       throw new Error("Invalid data format");
//     }

//     const transactions: ITransactions = data;

//     return transactions;

//   } catch (error) {
//     console.log("getTrans  Error:", (error as Error).message);
//     throw error
//   }
// }

export default async function PageTransactions() {
  const session = await getServerSession(authOptions);
  const authToken = session?.user.token;
  // console.log("HomePage  authToken>>>>>>>>>>>>>>>>>>>>>>>>>>>>", authToken);

  const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["Transactions", 1], () =>
  //   apiWallet.getAllTransactions(authToken, 1)
  // );
  // const dehydratedState = dehydrate(queryClient);

//===============================================================================
  // const firstPageData = await apiWallet.getAllTransactions(authToken, 1)

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["TransactionsList"],
    queryFn: ({ pageParam = 1 }) => apiWallet.getAllTransactions(authToken, pageParam),
    
    // initialData: {
    //   pages: [{ data: firstPageData }],
    //   pageParams: [0],
    //   // pageParams: [1], // при возврате с другой страницы кэш обнуляется
    // }
  });

  // const dehydratedState = dehydrate(queryClient);

  const dehydratedState =  JSON.parse(JSON.stringify(dehydrate(queryClient)));


  return (
    <>
      <Hydrate state={dehydratedState}>
        <Link href="/">HOME</Link>
        <h1>Page Transactions</h1>
        <TransactionList authToken={authToken} />
        <div style={{ height: 250, backgroundColor: "grey" }}></div>

        <ModalBox modalName="logout">
          <ModalLogOut />
        </ModalBox>
      </Hydrate>
    </>
  );
}
