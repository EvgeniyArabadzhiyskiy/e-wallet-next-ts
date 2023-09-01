"use client";

import { signOut } from "next-auth/react";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";

import { Box } from "../Box/Box";
import { Border, Modal, Title } from "./ModalLogout.styled";
import EnterButton from "../Buttons/EnterButton";
import CancelButton from "../Buttons/CancelButton";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";

const ModalLogout = () => {
  const { setModalToggle } = useGlobalState();

  const onCancelClick = () => {
    setModalToggle("logout");
  };

  const logOut = () => {
    signOut();
  };

  return (
    <Border>
      <Modal>
        <Box mb={50}>
          <Title>Are you sure you want to sign out?</Title>
        </Box>
        <ButtonWrapper>
          <EnterButton
            height={50}
            maxWidth="300px"
            enterText="EXIT"
            onClick={logOut}
          />
          <CancelButton cancelText="CANCEL" onClick={onCancelClick} />
        </ButtonWrapper>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
