"use client";

import React, { useState } from "react";
import { createContext } from "react";
import { boolean } from "yup";

export interface ModalState  {
  [key: string]: boolean;
};

export const GlobalContext = createContext<any | undefined>(undefined);

export default function GlobalProvider({children}: {children: React.ReactNode}) {
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({});

  return (
    <GlobalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}


// const ModalBox = ({ children }: { children: React.ReactNode }) => {
//   const [modalStates, setModalStates] = useState<{ [key: string]: boolean }>({});

//   const openModal = (modalName: string) => {
//     setModalStates((prevStates) => ({
//       ...prevStates,
//       [modalName]: true,
//     }));
//   };

//   const closeModal = (modalName: string) => {
//     setModalStates((prevStates) => ({
//       ...prevStates,
//       [modalName]: false,
//     }));
//   };

//   // Функция для проверки, открыто ли модальное окно по его имени
//   const isModalOpen = (modalName: string) => {
//     return modalStates[modalName] || false;
//   };

//   const modalComponents = React.Children.toArray(children).filter(
//     (child) => React.isValidElement(child) && child.type === Modal
//   );

//   return (
//     <>
//       {modalComponents.map((modal: any) => {
//         const { name } = modal;
//         const isOpen = isModalOpen(name);

//         const modalElement = (
//           <Modal
//             name={name}
//             isOpen={isOpen}
//             openModal={openModal}
//             closeModal={closeModal}
//           >
//             {modal.props.children}
//           </Modal>
//         );

//         return modalElement;
//       })}
//     </>
//   );
// };

// const Modal = ({
//   name,
//   isOpen,
//   openModal,
//   closeModal,
//   children,
// }: {
//   name: string;
//   isOpen: boolean;
//   openModal: (modalName: string) => void;
//   closeModal: (modalName: string) => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <>
//       {isOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             {children}
//             <button onClick={() => closeModal(name)}>Закрыть</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Пример использования

// const App = () => {
//   const openModal = (modalName: string) => {
//     // Логика для открытия модального окна
//   };

//   const closeModal = (modalName: string) => {
//     // Логика для закрытия модального окна
//   };

//   return (
//     <div>
//       <ModalBox>
//         <Modal name="modal1" openModal={openModal} closeModal={closeModal}>
//           <h2>Модальное окно 1</h2>
//           <button onClick={() => openModal("modal2")}>
//             Открыть модальное окно 2
//           </button>
//         </Modal>
//         <Modal name="modal2" openModal={openModal} closeModal={closeModal}>
//           <h2>Модальное окно 2</h2>
//           <button onClick={() => closeModal("modal2")}>Закрыть</button>
//         </Modal>
//         {/* Другие компоненты */}
//       </ModalBox>
//     </div>
//   );
// };

