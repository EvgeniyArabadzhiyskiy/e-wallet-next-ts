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
import { isITransactions } from "@/src/helpers/isITransactions";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";
import { ITransactions } from "@/src/types/transactions";

const getAllTransactions = async (authToken: any, pageNum: number) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    //   await new Promise(res => setTimeout(() => res(777), 5000))
    const response = await fetch(
      `${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`,
      options
    );
    const data = await response.json();

    if (!response.ok) {
      const errorMessage = response.statusText || "An error occurred";
      throw new Error(errorMessage);
    }

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
