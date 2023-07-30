import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { Hydrate, dehydrate, useQuery } from "@tanstack/react-query";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import getQueryClient from "@/src/lib/getQueryClient";
import TransactionList from "@/src/components/TransactionList/TransactionList";
import ModalBox from "@/src/components/ModalWindow/ModalBox";
import FlipCard from "@/src/components/FlipCard/FlipCard";
import { getBalance } from "@/src/helpers/getBalance";
import TransactionTable from "@/src/components/TransactionTable/TransactionTable";


export default function PageTransactions() {
  // const session = await getServerSession(authOptions);
  // const authToken = session?.user.token;

  // const queryClient = getQueryClient();

  // await queryClient.prefetchQuery(["Balance"], () =>
  //   getBalance(authToken)
  // );

  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["TransactionsList"],
  //   queryFn: ({ pageParam = 1 }) =>
  //     apiWallet.getAllTransactions(authToken, pageParam),
  // });

  // const dehydratedState = dehydrate(queryClient);

  return (
    <>
      {/* <Hydrate state={dehydratedState}> */}
     
      <TransactionTable />

      <ModalBox modalName="transaction">
        <FlipCard />
      </ModalBox>
      {/* </Hydrate> */}
    </>
  );
}
