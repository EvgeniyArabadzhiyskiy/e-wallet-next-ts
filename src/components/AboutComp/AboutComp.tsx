"use client";

import { useSession } from "next-auth/react";
// import Image from "next/image";
import Link from "next/link";

const AboutComp = ({session}: {session?: any}) => {
  // console.log("SERVER  session:", session?.user.user.firstName);

  const user = useSession()
  // const userName = user.data?.user?.firstName
  // console.log("AboutComp  userName:", userName);
  

  return (
    <div>
      <Link href="/">HOME</Link>
      {/* <h1>{userName}</h1> */}
      {/* <h1>SERVER USER: {session?.user.user.firstName}</h1> */}

      
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
