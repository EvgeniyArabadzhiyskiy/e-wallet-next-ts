"use client";

import { useSession } from "next-auth/react";
// import Image from "next/image";
import Link from "next/link";

const AboutComp = () => {
  const session = useSession()
  // console.log("AboutComp  session:", session.data);

  return (
    <div>
      <Link href="/">HOME</Link>
      
      {/* <div style={{ position: "fixed", width: "300px", height: "200px", overflowX: "hidden", 
       zIndex: -1
      }} >
      <Image
        src="/images/ewallet-2.webp"
        alt="phone"
        fill={true}
        style={{objectFit: 'cover'}}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
        priority
       />
      </div> */}
      <h1 style={{  textAlign: "center", fontSize: '64px'}} >Current pathname</h1>
      
    </div>
  );
};

export default AboutComp;
