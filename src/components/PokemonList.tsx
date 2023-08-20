import axios from "axios";

const getPokemon = async () => {
  await new Promise((res) =>
    setTimeout(() => res(console.log("Promise resolve")), 5000)
  );

  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
  );
  return data.results;
};

export default async function PokemonList() {
  const pokemons = await getPokemon();
  //   console.log("PokemonList  pokemons:", pokemons);

  return (
    <>
      <h1 style={{ color: "white", fontSize: 30, marginBottom: 30 }}>
        Pokemon List
      </h1>
      <ul>
        {pokemons.map((item: any) => {
          return (
            <li style={{ color: "white" }} key={item.name}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
