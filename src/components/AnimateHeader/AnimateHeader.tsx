"use client";

import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimateHeader = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ translateY: "-100%" }}
        animate={{ translateY: "0%" }}
        transition={{duration: 0.8}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateHeader;
