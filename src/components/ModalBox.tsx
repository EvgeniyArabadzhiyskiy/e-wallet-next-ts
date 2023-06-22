"use client";

import { useContext, useState } from "react";
import { createContext } from "react";
import ModalWindow from "./ModalWindow/ModalWindow";
import { GlobalContext } from "./GlobalProvider/GlobalProvider";

// export const ModalContext = createContext<any | undefined>(undefined)

const ModalBox = ({ children }: { children: React.ReactNode }) => {
//   const [isOpen, setIsOpen] = useState(false);

const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  console.log("re-render");
  return (
    //   <ModalContext.Provider value={{isOpen: isOpen, setIsOpen: setIsOpen}}>
    //     <button type="button" onClick={onOpenModal}>Open</button>
    //     {isOpen && <ModalWindow setIsOpen={setIsOpen}>{children}</ModalWindow>}
    //   </ModalContext.Provider>

    <>
      {/* <button type="button" onClick={onOpenModal}>
        Open
      </button> */}
      {isModalOpen && <ModalWindow setIsModalOpen={setIsModalOpen}>{children}</ModalWindow>}
    </>
  );
};

export default ModalBox;

// const ModalBox = ({ children }: { children: React.ReactNode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const onOpenModal = () => {
//     setIsOpen(true);
//   };

// //   console.log("re-render");
//   return (
//     <>
//       <button type="button" onClick={onOpenModal}>Open</button>
//       {isOpen && <ModalWindow setIsOpen={setIsOpen}>{children}</ModalWindow>}
//     </>
//   );
// };

// export default ModalBox;
