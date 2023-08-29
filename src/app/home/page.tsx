// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import EWalletBgTab from '@/public/images/tablet.webp';
// import styled from "styled-components";
// import AboutComp from "@/src/components/AboutComp";

// const Baner = styled.div`
//   position: relative;
//   width: 600px;
//   height: 600px;
//   border-radius: 50%;
//   background: url(${EWalletBgTab.src});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: contain;
// `

// export default function HomePage() {
//   return (
//     <div
//       style={{
//         // position: "relative",
//         width: 600,
//         height: 600,
//         borderRadius: "50%",
//         backgroundColor: "#212937",

//         // overflow: "hidden",
//       }}
//     >

//     <AboutComp />
//     <Baner

//     >
//       {/* <div style={{ height: 250,  backgroundColor: "blue" }}>BANER</div> */}
//       {/* <Image
//         src="/images/tablet.webp"
//         alt="baner"
//         fill={true}
//         style={{ objectFit: "cover" }}
//       /> */}
//     </Baner>
//     </div>
//   );
// }

"use client";

import axios, { spread } from "axios";
import { useEffect, useRef } from "react";
import { background } from "styled-system";

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
  // try {
  //   const { data } = await axios(
  //     `https://pokeapi.co/api/v2/pokemo?offset=20&limit=30`
  //   );
  //   const sss = data.results[0].name;
  //   console.log("getPokemon3  sss:", sss);

  //   return sss
  // } catch (error) {
  //   console.log("getPokemon3  error:", error.response.data);
    
  // }

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemo?offset=20&limit=30`
    );

    if (!response.ok) {
      const errorData = await response.text();
      const errorMessage = errorData || `Request failed with status ${response.status}.`;
      throw new Error(errorMessage);
    }

    const data = await response.json()
    console.log("getPokemon3  data:", data);


   

    // const sss = data.results[0].name;
    // console.log("getPokemon3  sss:", sss);

    return data
  } catch (error) {
    console.log("getPokemon3  error:", error);
    
  }
};



(async () => {
  // try {
  //   const bulbasaur = await getPokemon1();
  //   const metapod = await getPokemon2();
    const spearow = await getPokemon3();

  //   console.log("bulbasaur:", bulbasaur);
  //   console.log("metapod:", metapod);
  //   console.log("spearow:", spearow);
  // } catch (error) {
  //   console.log(error);
    
  // }

  
    // const bulbasaur =  getPokemon1();
    // const metapod =  getPokemon2();
    // const spearow =  getPokemon3();

    // const results = await Promise.allSettled([bulbasaur, metapod, spearow])
    // console.log("results:", results);

    let pokemons: any[] = []
    
    // results.forEach((result, index) => {
    //   // console.log("results.forEach  result:", result);
      
    //   if (result.status === 'fulfilled') {
    //     // console.log(`Запрос ${index + 1} успешен:`, result.value);
    //     pokemons.push(result.value)
    //   } 
    //   else {
    //     // console.error(`Запрос ${index + 1} завершился с ошибкой:`, result.reason);
    //   }
    // });
    // console.log("pokemons:", pokemons);

    // console.log("bulbasaur:", aa);
    // console.log("metapod:", bb);
    // console.log("spearow:", cc);
  
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
