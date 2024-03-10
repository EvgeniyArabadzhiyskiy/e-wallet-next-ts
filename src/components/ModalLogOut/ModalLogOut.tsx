"use client";

import { Box } from "../Box/Box";
import { Border, Modal, Title } from "./ModalLogout.styled";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";
import EnterButton from "../Buttons/EnterButton";
import CancelButton from "../Buttons/CancelButton";
import { trpc } from "@/src/trpc/client";
import { useRouter } from "next/navigation";
import { useModalWindow } from "@/src/hooks/useModalWindow";

const ModalLogout = () => {
  const router = useRouter();
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  const onCancelClick = () => {
    setModalToggle("logout");
  };

  const { mutate: signOut } = trpc.authRouter.signOut.useMutation({
    onSuccess: () => {
      router.push('/')
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
