

"use client";

import { trpc } from "@/src/trpc/client";
import axios from "axios";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const canvasElement = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    // const ctx = canvas.getContext("2d");
    // console.log("useEffect  ctx:", ctx);

    if (!canvasElement.current) {
      return;
    }
    const ctx = canvasElement.current.getContext("2d");
    if (!ctx) {
      return;
    }

    const height = ctx.canvas.clientHeight;
    const width = ctx.canvas.clientWidth;
    ctx.restore();

    var fontSize = (height / 100).toFixed(2);
    // console.log("useEffect  fontSize:",  fontSize + "em Arial");
    // console.log("useEffect  ctx.font:", ctx.font);
    // ctx.font = fontSize + "em Arial";
    ctx.font = "700 30px sans-serif";
    // console.log("useEffect  ctx.font:", ctx.font);
    ctx.textBaseline = "middle";

    var text = "Balance", // ваш баланс
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();

    // ctx.fillStyle = "rgba(200, 0, 0, 0.523)";
    // ctx.fillRect(75, 50, 50, 50);

    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);

    // ctx.closePath()
    // ctx.fill();
  });

  return (
    <div
      style={
        {
          // width: 400,
          // height: 200,
          // background: "#9d5345",
          // position: "relative",
        }
      }
    >
      <canvas
        className="canvas"
        width={400}
        height={200}
        id="canvas"
        ref={canvasElement}
      >
        current stock price: $3.15 + 0.15
      </canvas>

      {/* <div style={{width: 150, height: 100, background: 'green', position: "absolute", top: 20, left: 20}}></div> */}
    </div>
  );
}

const getPokemon1 = async () => {
  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
  );
  return data.results[0].name;
};

const getPokemon2 = async () => {
  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=10&limit=20`
  );
  return data.results[0].name;
};

const getPokemon3 = async () => {
  try {
    const { data } = await axios(
      `https://pokeapi.co/api/v2/pokemon?offset=20&limit=30`
    );
    const sss = data.results[0].name;
    // console.log("getPokemon3  sss:", sss);

    return sss;
  } catch (error) {
    // console.log("getPokemon3  error:", error);
  }

  // try {
  //   const response = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon?offset=20&limit=30`
  //     // 'https://jsonplaceholder.typicode.com/posts'
  //   );

  //   if (!response.ok) {
  //     const errorData = await response.text();
  //     const errorMessage = errorData || `Request failed with status ${response.status}.`;
  //     throw new Error(errorMessage);
  //   }

  //   const data = await response.json()
  //   // console.log("getPokemon3  data:", data);

  //   // const sss = data.results[0].name;
  //   // console.log("getPokemon3  sss:", sss);

  //   return data
  // } catch (error) {
  //   console.log("getPokemon3  error:", error);

  // }
};

(async () => {
  // try {
  // const bulbasaur = await getPokemon1();
  // const metapod = await getPokemon2();
  // const spearow = await getPokemon3();

  // console.log("bulbasaur:", bulbasaur);
  // console.log("metapod:", metapod);
  // console.log("spearow:", spearow);
  // } catch (error) {
  // }

  const bulbasaurPromise = getPokemon1();
  const metapodPromise = getPokemon2();
  const spearowPromise = getPokemon3();

  const results = await Promise.allSettled([
    bulbasaurPromise,
    metapodPromise,
    spearowPromise,
  ]);
  const bulbasaur = results[0];

  if (bulbasaur.status === "rejected") {
    const bulbasaurReason = bulbasaur.reason.message;
    // console.log("bulbasaurReason:", bulbasaurReason);
  }

  if (bulbasaur.status === "fulfilled") {
    const bulbasaurValue = bulbasaur.value;
    // console.log("bulbasaurValue:", bulbasaurValue);
  }
})();

// getPokemon1()
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

// getPokemon2()
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

// getPokemon3()
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })



// let n = 0;
// if (typeof window !== "undefined") {
//   do {
//     n = Number(prompt("Введите положительное число"));
//     if (n < 0) {
//       alert(
//         "Вы ввели отрицательное число. Пожалуйста, введите положительное число."
//       );
//     }
//   } while (n < 0);
// }
