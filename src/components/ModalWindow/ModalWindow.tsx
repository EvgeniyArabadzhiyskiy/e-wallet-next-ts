"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal, Overlay } from "./ModalWindow.styled";

interface IProps {
  modalName: string;
  setModalToggle: any;
  children: React.ReactNode;
}

export default function ModalWindow({ children, modalName, setModalToggle }: IProps) {
  const modalRoot = document.querySelector("#modal-root");

  // const onToggleModal = () => {
  //   // setIsModalOpen((prev: ModalState) => {
  //   //   return {
  //   //     ...prev,
  //   //     [modalName]: !prev[modalName],
  //   //   };
  //   // });
  // };

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
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEscPress);
      document.body.style.overflow = "visible";
    };
  });

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot as HTMLElement
  );
}
