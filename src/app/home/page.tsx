"use client"

import Image from "next/image";
import Link from "next/link";
import EWalletBgTab from '@/public/images/tablet.webp';
import styled from "styled-components";
import AboutComp from "@/src/components/AboutComp";

const Baner = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: url(${EWalletBgTab.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export default function HomePage() {
  return (
    <div
      style={{
        // position: "relative",
        width: 600,
        height: 600,
        borderRadius: "50%",
        backgroundColor: "#212937",

        // overflow: "hidden",
      }}
    >

    <AboutComp />
    <Baner
    
    >
      {/* <div style={{ height: 250,  backgroundColor: "blue" }}>BANER</div> */}
      {/* <Image
        src="/images/tablet.webp"
        alt="baner"
        fill={true}
        style={{ objectFit: "cover" }}
      /> */}
    </Baner>
    </div>
  );
}
