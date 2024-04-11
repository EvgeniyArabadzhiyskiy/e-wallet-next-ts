"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function RootTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <div
        // variants={variants}
        // initial="hidden"
        // animate="enter"

        // initial={{ translateX: "-100%" }}
        // animate={{ translateX: "0%" }}

        // initial={{ opacity: 0.5, x: -200, y: 0 }}
        // animate={{ opacity: 1, x: 0, y: 0 }}
        // exit={{ opacity: 0, x: -200, y: 0 }}
        // transition={{ duration: 0.3 }}

        // transition={{  type: "spring", stiffness: 200  }}
        // transition={{duration: 0.1, type: "spring", stiffness: 200}}
      >
        {children}
      </div>
    </>
  );
}
