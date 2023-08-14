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
    ctx.restore()

    var fontSize = (height / 100).toFixed(2);
    // console.log("useEffect  fontSize:",  fontSize + "em Arial");
    // console.log("useEffect  ctx.font:", ctx.font);
    // ctx.font = fontSize + "em Arial";
    ctx.font = '700 30px sans-serif'
    console.log("useEffect  ctx.font:", ctx.font);
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
      style={{
        // width: 400,
        // height: 200,
        // background: "#9d5345",
        // position: "relative",
      }}
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
