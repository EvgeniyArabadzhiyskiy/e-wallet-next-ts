// "use client";

import { Hydrate, dehydrate, useQuery } from "@tanstack/react-query";
import TransactionList from "@/src/components/TransactionList/TransactionList";
import getQueryClient from "@/src/lib/getQueryClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import Header from "@/src/components/Header/Header";
import ModalBox from "@/src/components/ModalBox";
import ModalLogOut from "@/src/components/ModalLogOut/ModalLogOut";
import DashBoardLayout from "@/src/components/DashBoardLayout/DashBoardLayout";
import { Title } from "@/src/components/Title/Title.styled";

const getAllTransactions = async (authToken: any, pageNum: number) => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const TRANSACTIONS = "/transactions";

  // const { authToken } = parseCookies();

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

//   await new Promise(res => setTimeout(() => res(777), 5000))
  const resFetch = await fetch(
    `${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`,
    options
  );
  const transactions = (await resFetch.json()) as any;

  return transactions;
};

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const authToken = session?.user.token;
  // console.log("HomePage  authToken>>>>>>>>>>>>>>>>>>>>>>>>>>>>", authToken);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["Transactions", 1], () =>
    getAllTransactions(authToken, 1)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hydrate state={dehydratedState}>
        <Header />

        <DashBoardLayout>
          {/* {typeof window !== 'undefined' &&  <Title>Home Title</Title>} */}
          {/* <Header currentUser={session} /> */}

          {/* <SideBar></SideBar> */}

          <TransactionList authToken={authToken} />
        </DashBoardLayout>

        <ModalBox modalName="logout">
          <ModalLogOut />
        </ModalBox>
      </Hydrate>
    </>
  );
}

// export default function HomePage() {
//   const session = useSession();
//   const authToken = session.data?.user.token;

//   const { data } = useQuery({
//     queryKey: ["transactions"],
//     queryFn: () => getAllTransactions(authToken),
//     staleTime: Infinity,
//     refetchOnWindowFocus: false,
//     enabled: !!authToken,
//   });

//   return (
//     <>
//       <h1>HOME PAGE</h1>
//       <Link href="/">HOME</Link>
//       {data &&
//         data.transactions.map((item: any) => {
//           return <li key={item._id}>{item.category}</li>;
//         })}
//     </>
//   );
// }

// const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
//   const {results} = await res.json()
//   console.log("============================================results", results);
