import { getServerSession } from "next-auth";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getBalance } from "@/src/apiWallet/balance";
import { authOptions } from "@/src/lib/auth";
import getQueryClient from "@/src/lib/getQueryClient";
import Balance from "../Balance/Balance";

async function BalanceComponentWrapper() {
  const session = await getServerSession(authOptions);
  const authToken = session?.token;

  const queryClient = getQueryClient();

  if (authToken) {
    await queryClient.prefetchQuery(["Balance"], () => getBalance(authToken));
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      {session && <Balance />}
    </Hydrate>
  );
}

export default BalanceComponentWrapper;
