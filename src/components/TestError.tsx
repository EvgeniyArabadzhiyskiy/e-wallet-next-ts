'use client'

import { useState } from "react";
import { getPokemons } from "./AuthCookie";

export default  function TestError() {
  const [counter, setCounter] = useState(0);

  // const data = await getPokemons();

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  if (counter === 3) {
    throw new Error("I crashed!");
  }

  return (
    <>
      <h1>{counter}</h1>
      <button type="button" onClick={handleClick}>
        Click
      </button>
      {/* <><pre>{JSON.stringify(data.results[0], null, 2)}</pre></> */}
      {/* <h1>Auth Token: {authToken}</h1> */}
    </>
  );
}
