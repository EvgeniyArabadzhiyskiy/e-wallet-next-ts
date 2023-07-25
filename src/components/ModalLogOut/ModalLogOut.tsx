"use client";

import { signOut } from "next-auth/react";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";
import { LogoutButton } from "../AuthButtons/AuthButtons";
import LogoutBtn from "../Buttons/LogoutBtn/LogoutBtn";

import { Border, Modal, Title } from "./ModalLogout.styled";
import EnterButton from "../Buttons/EnterButton/EnterButton";
import CancelButton from "../Buttons/CancelButton/CancelButton";

const ModalLogout = () => {
  const { setModalToggle } = useGlobalState();

  const onCancelClick = () => {
    setModalToggle("logout")
  };

  const logOut =  () => {
    signOut()
  };

  return (
    <Border>
      {/* {isLoading && <Spinner />} */}
      <Modal>
        <Title>Are you sure you want to sign out?</Title>
        <div>
          <EnterButton enterText="exit" onClick={logOut} />
          <CancelButton cancelText="cancel" onClick={onCancelClick} />
        </div>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
