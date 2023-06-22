"use client";

import { useContext } from "react";
import { LogoutButton } from "../AuthButtons/AuthButtons";
import { GlobalContext } from "../GlobalProvider/GlobalProvider";
// import { ModalContext } from "../ModalBox";

export default function ModalLogOut() {
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  return (
    <>
      <h1>LodOut Modal</h1>
      <LogoutButton />
      <button type="button" onClick={() => setIsModalOpen(false)}>
        Close
      </button>
    </>
  );
}

//   interface IProps {
//     color?: string;
//     onCloseModal?: () => void;
//   }

// export default function ModalLogOut({ color, onCloseModal }: IProps) {
//   // const onCloseModal = () => {
//   //     setIsOpen(false)
//   // }
//   return (
//     <>
//       <h1>LodOut Modal</h1>
//       <LogoutButton />
//       <button type="button" onClick={onCloseModal}>
//         Close
//       </button>
//     </>
//   );
// }
