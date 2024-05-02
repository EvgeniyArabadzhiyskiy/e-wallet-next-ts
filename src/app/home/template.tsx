"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  usePageMounted,
  usePageTransition,
  usesetDisplayChildren,
} from "@/src/hooks/useTimeLine";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useLoading } from "@/src/hooks/useModalWindow";

export default function RootTemplate({ children }: PropsWithChildren) {
  // const container = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log("Mount");

  //   return () => {
  //     console.log("Unmount");
  //   };
  // });

  // const [isMounted, setIsMounted] = useState(false)

  // const setIsMounted = usePageMounted(st => st.setIsMounted);

  // const setPageTimeline = usePageTransition((state) => state.setPageTimeline);
  // const tl = usePageTransition((state) => state.pageTimeline);

  // const { setIsLoading } = useLoading();

  // const displayChildren = usesetDisplayChildren(state => state.displayChildren);
  // console.log("RootTemplate  displayChildren:", displayChildren);
  // const setDisplayChildren = usesetDisplayChildren(state => state.setDisplayChildren);

  // console.log("Re-render-Home");

  // useGSAP(() => {
  //   // setIsMounted(true);

  //   console.log("Inner");

  //   // gsap.fromTo("#transition-element", { opacity: 0, x: -300 }, { opacity: 1, x: 0, duration: 2 });

  //   // const tl = gsap.timeline({paused: true});
  //   // setPageTimeline(tl);

  //   // const tween = gsap.to("#transition-element", { opacity: 0.3, duration: 4 });

  //   // tl?.add(tween)

  //   // tl
  //   //   .set("#transition-element", { translateX: "-100%", delay: 0 })
  //   //   .to("#transition-element", { translateX: "0%", duration: 0.5 })
  //   //   .then(() => {
  //   //     // setIsLoading();
  //   //   });
  // });

  return (
    <>
    
    
    {/* <AnimatePresence>
      <motion.div
        // variants={variants}
        // initial="hidden"
        // animate="enter"

        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        exit={{ translateX: "100%" }}
        transition={{ duration: 1 }}

        // initial={{ background: "red" }}
        // animate={{ background: "blue" }}
        // exit={{ background: "blue" }}
        // transition={{ duration: 1 }}

        // initial={{ opacity: 0.5, x: -200, y: 0 }}
        // animate={{ opacity: 1, x: 0, y: 0 }}
        // exit={{ opacity: 0, x: -200, y: 0 }}
        // transition={{ duration: 1 }}

        // transition={{  type: "spring", stiffness: 200  }}
        // transition={{duration: 0.1, type: "spring", stiffness: 200}}
      >
      </motion.div>
    </AnimatePresence> */}
        {children}
    </>
  );
  // return <h1 style={{color: "red" , fontSize:56}}>HEllo</h1>;
}
