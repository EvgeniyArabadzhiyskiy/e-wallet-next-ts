"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./ModalWindow.styled";
import { motion } from "framer-motion";

const pageAnimationType = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const pageAnimation = {
  variants: pageAnimationType,
  initial: "hidden",
  animate: "show",
  exit: "hidden",
};

interface IProps {
  modalName: string;
  setModalToggle: (key: string) => void;
  children: React.ReactNode;
}

// const variants = {
//   active: {
//       backgroundColor: "#f00"
//   },
//   inactive: {
//     backgroundColor: "#fff",
//     transition: { duration: 2 }
//   }
// }

function ModalWindow({ children, modalName, setModalToggle }: IProps) {
  const modalRoot: HTMLDivElement = document.querySelector("#modal-root")!;

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalToggle(modalName);
    }
  };

  const onEscPress = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      setModalToggle(modalName);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onEscPress);
    // document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEscPress);
      // document.body.style.overflow = "visible";
    };
  });

  return createPortal(
    <Overlay
      // {...pageAnimation}
      // transition={{ duration: 0.5 }}

      // initial='hidden'
      // animate="show"
      // variants={{
      //   hidden: { opacity: 0 },
      //   show: {opacity: 1}
      //   // inactive: {transition: {duration: 2}}
      // }}
      // exit='hidden'

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onBackdropClick}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </Overlay>,
    modalRoot
  );
}

export default ModalWindow;
