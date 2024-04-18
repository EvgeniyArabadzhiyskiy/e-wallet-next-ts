"use client";

import { Box } from "../Box/Box";
import { Border, Modal, Title } from "./ModalLogout.styled";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";
import EnterButton from "../Buttons/EnterButton";
import CancelButton from "../Buttons/CancelButton";
import { trpc } from "@/src/trpc/client";
import { useRouter } from "next/navigation";
import { useModalWindow } from "@/src/hooks/useModalWindow";
import { googleLogout } from "@react-oauth/google";
import { LOGOUT_KEY } from "@/src/constants/modalKey";
import { useAnimatedCloseModal } from "@/src/hooks/useAnimatedCloseModal";
import { useTimeLine } from "@/src/hooks/useTimeLine";

const ModalLogout = () => {
  const timeLine = useTimeLine((state) => state.timeline);
  const setModalToggle = useModalWindow((state) => state.setModalToggle);
  const animatedCloseModal = useAnimatedCloseModal(LOGOUT_KEY);
  
  const onCancelClick = () => {
    animatedCloseModal();
  };

  const router = useRouter();

  const { mutate: signOut } = trpc.authRouter.signOut.useMutation({
    onSuccess: () => {
      googleLogout();

      timeLine?.reversed(timeLine !== undefined).then(() => {
        setModalToggle(LOGOUT_KEY);
        router.push("/");
        router.refresh();
      });
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
            type="button"
            height={50}
            maxWidth="300px"
            onClick={() => signOut()}
          >
            EXIT
          </EnterButton>

          <CancelButton onClick={onCancelClick}>CANCEL</CancelButton>
        </ButtonWrapper>
      </Modal>
    </Border>
  );
};

export default ModalLogout;
