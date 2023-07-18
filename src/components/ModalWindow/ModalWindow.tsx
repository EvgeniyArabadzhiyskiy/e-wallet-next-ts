"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal, Overlay } from "./ModalWindow.styled";
import { ModalState } from "../GlobalProvider/GlobalProvider";

interface IProps {
  children: React.ReactNode;
  modalName: string;
  setModalToggle: any;
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

  const onBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      // onToggleModal(modalName);
      setModalToggle(modalName)
    }
  };

  const onEscPress = (e: any) => {
    if (e.code === "Escape") {
      // onToggleModal(modalName);
      setModalToggle(modalName)
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
