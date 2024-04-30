"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  usePageMounted,
  usePageTransition,
  usesetDisplayChildren,
} from "../hooks/useTimeLine";
import { usePathname } from "next/navigation";
import { useLoading } from "../hooks/useModalWindow";

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
// };

export default function RootTemplate({ children }: PropsWithChildren) {
  const container = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  // const setPageTimeline = usePageTransition(state => state.setPageTimeline);
  const tl = usePageTransition((state) => state.pageTimeline);

  // const { setIsLoading } = useLoading();

  // const [displayChildren, setDisplayChildren] = useState<any>(children)

  // const displayChildren = usesetDisplayChildren(state => state.displayChildren) || children;
  // const setDisplayChildren = usesetDisplayChildren(state => state.setDisplayChildren);

  // const isMounted = usePageMounted(state => state.isMounted);
  // const setIsMounted = usePageMounted(state => state.setIsMounted);

  // console.log(children === displayChildren);

  // useEffect(() => {
  //   // if (pathName.startsWith("/home")) {
  //   //   return
  //   // }

  //   // console.log("Mount Main");

  //   // document.body.style.backgroundColor = "#5267c4";
  //   // const id = setTimeout(() => {
  //   //   setDisplayChildren(children);
  //   //   console.log("TimeOut APP");

  //   // }, 2000);

  //     // const tl = gsap.timeline({paused:true});
  //     // setPageTimeline(tl);

  //     // const scsle = gsap.to("#transition-element", { y: 500, duration: 3 });

  //     // tl?.add(scsle)

  //   return () => {
  //     // console.log("Unmount Main");
  //     // clearTimeout(id);
  //     // setDisplayChildren(null);
  //   }

  // })

  // console.log("Re-render");

  useGSAP(
    () => {
      // if (pathName.startsWith("/home")) {
      //   return
      // }

      console.log("APP");
      // tl?.play();

      // const tl = gsap.timeline();
      // const tl = gsap.timeline({paused:true});
      // setPageTimeline(tl);

      // gsap.fromTo("#transition-element", { y: -500 }, { y: 0, duration: 1.5 });
      // tl?.add(gsap.to("#transition-element", { y: 400, duration: 1 }));

      // tl.to("#transition-element", { y: 400, duration: 1 })
      //   .to("#transition-element", { x: 400, duration: 1 })
      //   .to("#transition-element", { opacity: 0.4, duration: 1 })
      //   .to("#transition-element", { y: 100, duration: 1 })
      //   .to("#transition-element", { opacity: 1, duration: 1 })
      //   .to("#transition-element", { x: 0, duration: 1 })
      //   .to("#transition-element", { y: 0, duration: 1 });
      // .play()
      // .then(() => {
      //   //  tl.pause()
      //   //    .clear()
      //      tl.reverse()
      // })

      gsap.fromTo("#transition-element",{ opacity: 0 }, { opacity: 1, duration: 0.5});
      const visible = gsap.to("#transition-element", { opacity: 0, duration: 0.5 });
      tl?.add(visible);

      // gsap.fromTo("#transition-element",{ opacity: 0}, { opacity: 1, duration: 0.8});
      // gsap.fromTo("#transition-element",{ translateX: "-100%"}, { translateX: "0%"});
      // const anime = gsap.to("#transition-element", { translateX: "100%", duration: 2});
      // tl?.add(anime);

      // tl
      //   ?.set("#transition-element", { translateX: "-100%", delay: 0 })
      //   .to("#transition-element", { translateX: "0%", duration: 1 })
      //   .then(() => {
      //     console.log("ANime");

      //     // setIsLoading();
      //   });
    },
    { dependencies: undefined }
  );

  return (
    <>{children}</>

    // <div ref={container} className="transition-container">
    //   <div
    //   id="transition-element"
    //   >
    //     {children}
    //   </div>
    // </div>
  );
}

// <AnimatePresence>
// <motion.div
// variants={variants}
// initial="hidden"
// animate="enter"

// initial={{ translateX: "-100%" }}
// animate={{ translateX: "0%" }}

/* ===========================================
// initial={{ opacity: 0.5, x: -200, y: 0 }}
// animate={{ opacity: 1, x: 0, y: 0 }}
// exit={{ opacity: 0, x: -200, y: 0 }}
// transition={{ duration: 0.3 }}
 =========================================== */

// transition={{  type: "spring", stiffness: 200  }}
// transition={{duration: 0.1, type: "spring", stiffness: 200}}
// >

// </motion.div>

// </AnimatePresence>
