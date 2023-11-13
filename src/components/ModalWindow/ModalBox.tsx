"use client";

import ModalWindow from "./ModalWindow";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";

interface IProps {
  children: React.ReactNode;
  modalName: string;
}

function ModalBox({ children, modalName }: IProps) {
  const { isModalOpen, setModalToggle } = useGlobalState();

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
}

export default ModalBox;
