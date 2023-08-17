"use client";

import { signOut } from "next-auth/react";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";

import { Border, Modal, Title } from "./ModalLogout.styled";
import EnterButton from "../Buttons/EnterButton/EnterButton";
import CancelButton from "../Buttons/CancelButton/CancelButton";
import { destroyCookie } from "nookies";
import { Box } from "../Box/Box";

const ModalLogout = () => {
  const { setModalToggle } = useGlobalState();

  const onCancelClick = () => {
    setModalToggle("logout");
  };

  const logOut = () => {
    signOut();
    // destroyCookie(null, "authToken", { path: "/" });
  };

  return (
    <Border>
      {/* {isLoading && <Spinner />} */}
      <Modal>
        <Title>Are you sure you want to sign out?</Title>
        <div>
          <Box mt={5}>
            <EnterButton
              width={{ mobile: "80%", desctop: "300px" }}
              height={50}
              enterText="exit"
              onClick={logOut}
            />
          </Box>
          <Box mt={4}>
            <CancelButton cancelText="cancel" onClick={onCancelClick} />
          </Box>
        </div>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
