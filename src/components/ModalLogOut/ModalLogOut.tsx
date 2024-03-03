"use client";

// import { signOut } from "next-auth/react";
import { useGlobalState } from "../GlobalProvider/GlobalProvider";

import { Box } from "../Box/Box";
import { Border, Modal, Title } from "./ModalLogout.styled";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";
import EnterButton from "../Buttons/EnterButton";
import CancelButton from "../Buttons/CancelButton";
import { trpc } from "@/src/trpc/client";
import { useRouter } from "next/navigation";

const ModalLogout = () => {
  const router = useRouter();
  const { setModalToggle } = useGlobalState();

  const onCancelClick = () => {
    setModalToggle("logout");
  };

  const { mutate: signOut } = trpc.authRouter.signOut.useMutation({
    onSuccess: (data) => {
      // console.log("ModalLogout  data:", data);

      router.push('/login')
      router.refresh();
      setModalToggle("logout");
    },
  });

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
            onClick={() => signOut()}
          />
          <CancelButton cancelText="CANCEL" onClick={onCancelClick} />
        </ButtonWrapper>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
