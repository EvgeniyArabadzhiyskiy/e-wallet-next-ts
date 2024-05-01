"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PropsWithChildren, useEffect, useRef } from "react";

const TransitionHeader = ({ children }: PropsWithChildren) => {
  const container = useRef<HTMLDivElement>(null);
  //   const first = useRef(false);

  //   useEffect(() => {
  //     if (!first.current) {
  //       first.current = true;
  //       return;
  //     }
  //     console.log("Mount");
  //     return () => {
  //       console.log("Unmount");
  //     };
  //   }, []);

  // useGSAP(
      
  //     () => {
  //       console.log("GO");
  //     const targets = gsap.utils.toArray(["p"]);
  //   //   console.log("TransitionHeader  targets:", targets);

  //     gsap.fromTo(targets, { opacity: 0, x: -300 }, { opacity: 1, x: 0, duration: 0.7 , stagger: 0.2 });
  //   },
  //   { scope: container }
  // );

  return <div ref={container}>{children}</div>;
};

export default TransitionHeader;
