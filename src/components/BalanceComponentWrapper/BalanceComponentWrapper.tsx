import { getServerSession } from "next-auth";
import { Hydrate, dehydrate } from "@tanstack/react-query";
// import { getBalance } from "@/src/apiWallet/balance";
import { authOptions } from "@/src/lib/auth";
import getQueryClient from "@/src/lib/getQueryClient";
import Balance from "../Balance/Balance";
import { cookies } from "next/headers";
import { verifyToken } from "@/src/helpers/verifyToken";
import { TRPCError } from "@trpc/server";
import prisma from "../../lib/prismaClient"

const getBalance = async () => {
  const nextCookies = cookies();
  const userID = await verifyToken(nextCookies);

  if (!userID) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  };

  const user = await prisma.user.findFirst({
    where: {
      id: userID,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  };

  return { userBalance: user.balance };
}

async function BalanceComponentWrapper() {
  // const session = await getServerSession(authOptions);
  // const authToken = session?.token;

  const queryClient = getQueryClient();

  // if (authToken) {
    // await queryClient.prefetchQuery(["Balance"], () => getBalance(authToken));

    await queryClient.prefetchQuery({
      queryKey: [['transactionRouter', 'getBalance'], { type: "query" }], 
      queryFn: getBalance,
    });
  // }

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      {/* {session && <Balance />} */}
      <Balance />
    </Hydrate>
  );
}

export default BalanceComponentWrapper;
