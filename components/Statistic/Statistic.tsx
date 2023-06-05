"use client";

import { useEffect } from "react";
import { Text, Wrapper } from "./Statistic.styled";
import { useState } from "react";

// const Statistic = ({ pokemons }: { pokemons?: any }) => {
//   return (
//     <Wrapper>
//       <Text>STATISTIC</Text>
//       <ul>
//         {pokemons?.length > 0 &&
//           pokemons.map((pok: any) => {
//             return <li key={pok.name}>{pok.name}</li>;
//           })}
//       </ul>
//     </Wrapper>
//   );
// };

// export default Statistic;

const Statistic = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
      );
      const { results } = await res.json();
      setPokemons(results)
    })();
  }, []);
  return (
    <Wrapper>
      <Text>STATISTIC</Text>
      <ul>
        {pokemons?.length > 0 &&
          pokemons.map((pok: any) => {
            return <li key={pok.name}>{pok.name}</li>;
          })}
      </ul>
    </Wrapper>
  );
};

export default Statistic;
