"use client";

import ModalWindow from "./ModalWindow";
import { useModalWindow } from "@/src/hooks/useModalWindow";

interface IProps {
  children: React.ReactNode;
  modalName: string;
}

function ModalBox({ children, modalName }: IProps) {
  const isModalOpen = useModalWindow((state) => state.isModalOpen);
  const isOpen = !!isModalOpen[modalName];

  return (
    <>{isOpen && <ModalWindow modalName={modalName}>{children}</ModalWindow>}</>
  );
}

export default ModalBox;
