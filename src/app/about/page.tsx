// "use client";

// import { Inter, Fira_Code } from "next/font/google";
// import Navigation from "@/src/components/Navigation/Navigation";
import LoaderTransaction from "@/src/components/TransactionLoader/TransactionLoader";
import PokemonList from "@/src/components/PokemonList";
import PokemonListClient from "@/src/components/PokemonListClient";
import TransactionList from "@/src/components/TransactionList/TransactionList";
import axios from "axios";
import { Suspense } from "react";

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

export default  function AboutPage() {
  // const pokemons = await getPokemon();
  //   console.log("PokemonList  pokemons:", pokemons);

  return (
    <div>
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
        <PokemonList />
      </Suspense> */}

      {/* <PokemonListClient /> */}

      {/* <LoaderTransaction /> */}
      {/* <TransactionList /> */}


    </div>
  );
}
