"use client";

import ModalWindow from "./ModalWindow";
import { useModalWindow } from "@/src/hooks/useModalWindow";
import { AnimatePresence } from "framer-motion";

interface IProps {
  children: React.ReactNode;
  modalName: string;
}

function ModalBox({ children, modalName }: IProps) {
  const isModalOpen = useModalWindow((state) => state.isModalOpen);
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  const isOpen = !!isModalOpen[modalName];

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalWindow modalName={modalName} setModalToggle={setModalToggle}>
          {children}
        </ModalWindow>
      )}
    </AnimatePresence>
  );
}

export default ModalBox;
