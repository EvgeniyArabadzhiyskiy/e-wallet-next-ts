// "use client";

// import { Inter, Fira_Code } from "next/font/google";
// import Navigation from "@/src/components/Navigation";
import LoaderTransaction from "@/src/components/TransactionLoader/TransactionLoader";
import PokemonListClient from "@/src/components/PokemonListClient";
import axios from "axios";
import { Suspense } from "react";
import getQueryClient from "@/src/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { getBalance } from "@/src/apiWallet/balance";
import StatisticLoader from "@/src/components/StatisticLoader";
import TransactionLoader from "@/src/components/TransactionLoader/TransactionLoader";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: "400",
//   preload: true,
// });

const getPokemon = async () => {
  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
  );
  return data.results;
};

export default async function AboutPage() {
  const pokemons = await getPokemon();

  const queryClient = getQueryClient();

  // const session = await getServerSession(authOptions);
  // const authToken = session?.token;
  // await queryClient.prefetchQuery(["Pokemons"], getPokemon);
  // if (authToken) {
  //   const balanceQuery = await queryClient.prefetchQuery(["Balance"], () => getBalance(authToken));
  // }
  // const balance = queryClient.getQueriesData<any>(["Pokemons"]);
  // console.log("About  Balance:+++++++++++++++++++++++++++++++++++", balance[0]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <Hydrate state={dehydratedState}>
        {/* <Header /> */}
        <h1 style={{ color: "white", fontSize: 30, marginBottom: 30 }}>
          About Page
        </h1>
        {/* <ul>
        {pokemons.map((item: any) => {
          return (
            <li style={{ color: "white" }} key={item.name}>
              {item.name}
            </li>
          );
        })}
      </ul> */}
        {/* <Navigation /> */}

        {/* <Suspense fallback={<h1 style={{ color: "white" }}>SUSPENSE...</h1>}>
       
      </Suspense> */}

        <PokemonListClient />
        {/* <LoaderTransaction /> */}
        {/* <TransactionLoader /> */}
        {/* <StatisticLoader /> */}
      </Hydrate>
    </div>
  );
}
