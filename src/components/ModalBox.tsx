"use client";

import { useContext } from "react";
import ModalWindow from "./ModalWindow/ModalWindow";
import { GlobalContext } from "./GlobalProvider/GlobalProvider";

const ModalBox = ({ children, modalName }: { children: React.ReactNode; modalName: string }) => {
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  const isOpen = !!isModalOpen[modalName];

  return (
    <>
      {isOpen && (
        <ModalWindow modalName={modalName} setIsModalOpen={setIsModalOpen}>
          {children}
        </ModalWindow>
      )}
    </>
  );
};

export default ModalBox;
