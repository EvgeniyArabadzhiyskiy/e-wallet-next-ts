"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import gsap from "gsap";
import { usePageTransition } from "../hooks/useTimeLine";
import { usePathname } from "next/navigation";
import { useLoading } from "../hooks/useModalWindow";

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
// };

export default function RootTemplate({ children }: PropsWithChildren) {
  const container = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  const setPageTimeline = usePageTransition(state => state.setPageTimeline);

  const { setIsLoading } = useLoading();

  // useGSAP(() => {
  //   // gsap.timeline()

  //   if (pathName.startsWith("/home")) {
  //     return
  //   }
  //   console.log("APP");
    

  //   const tl = gsap.timeline();
  //   setPageTimeline(tl);

  //   tl
  //     .set("#transition-element", { translateX: "-100%", delay: 0 })
  //     .to("#transition-element", { translateX: "0%", duration: 0.5 })
  //     .then(() => {
  //       // setIsLoading();
  //     });
  // });

  return (
    // <div ref={container} className="transition-container">
    //   <div
    //   id="transition-element"
    //   >
    //     {children}
    //   </div>
    // </div>

    <>{children}</>
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
