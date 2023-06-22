"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal, Overlay } from "./ModalWindow.styled";

interface IProps {
  children: React.ReactNode;
  setIsModalOpen: any;
}


export default function ModalWindow({ children, setIsModalOpen }: IProps) {
    const modalRoot = document.querySelector('#modal-root');

    const onCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const onBackdropClick = (e: any) => {
      if (e.target === e.currentTarget) {
        //   setIsModalOpen(false);
        onCloseModal();
      }
    };
  
    const onEscPress = (e: any) => {
      if (e.code === "Escape") {
        //   setIsModalOpen(false);
        onCloseModal();
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
        <Modal>
          
          {children}
          {/* <button type="button" onClick={onCloseModal}>
            Close
          </button> */}
        </Modal>
      </Overlay>,
      modalRoot as HTMLElement
    );
  }

// export default function ModalWindow({ children, setIsOpen }: IProps) {
//   const onCloseModal = () => {
//     setIsOpen(false);
//   };

//   const onBackdropClick = (e: any) => {
//     if (e.target === e.currentTarget) {
//       //   setIsOpen(false);
//       onCloseModal();
//     }
//   };

//   const onEscPress = (e: any) => {
//     if (e.code === "Escape") {
//       //   setIsOpen(false);
//       onCloseModal();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", onEscPress);
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", onEscPress);
//       document.body.style.overflow = "visible";
//     };
//   });

//   return createPortal(
//     <Overlay onClick={onBackdropClick}>
//       <Modal>
//         {React.Children.map(children, (child) => {
//           return React.cloneElement(child as React.ReactElement<any>, {
//             color: "red",
//             onCloseModal: onCloseModal,
//           });
//         })}
//         {/* {children} */}
//         {/* <button type="button" onClick={onCloseModal}>
//           Close
//         </button> */}
//       </Modal>
//     </Overlay>,
//     document.body as HTMLElement
//   );
// }
