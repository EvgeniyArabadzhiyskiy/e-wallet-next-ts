"use client";

import { useContext } from "react";
import ModalWindow from "./ModalWindow";
import { GlobalContext, useGlobalState } from "../GlobalProvider/GlobalProvider";

const ModalBox = ({ children, modalName }: { children: React.ReactNode; modalName: string }) => {
  // const { isModalOpen, setModalToggle } = useContext(GlobalContext);
  const { isModalOpen, setModalToggle } = useGlobalState()

  const isOpen = !!isModalOpen[modalName];

  return (
    <>
      {isOpen && (
        <ModalWindow modalName={modalName} setModalToggle={setModalToggle}>
          {children}
        </ModalWindow>
      )}
    </>
  );
};

export default ModalBox;
