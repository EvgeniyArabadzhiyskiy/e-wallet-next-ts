"use client";

import { useGSAP } from "@gsap/react";

import {
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter(props: PropsWithChildren) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function TransitionWrapper(props: PropsWithChildren) {
  const pathName = usePathname();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      // onExitComplete={() => {
      //   console.log("Finish")
      //   router.push(path)
      // }}
    >
      <motion.div
        key={pathName}
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%"}}
        exit={{ translateX: "100%",transition: { duration: 2 },}}
        transition={{ duration: 2 }}

        // onAnimationComplete={() => {
        //   console.log("Finish");
        // }}
      >
        <FrozenRouter>
          {/* <button onClick={() => satPath(ddd)}>STATE</button>
          <h1 style={{ color: "red" }}>{d}</h1> */}
          {props.children}
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
