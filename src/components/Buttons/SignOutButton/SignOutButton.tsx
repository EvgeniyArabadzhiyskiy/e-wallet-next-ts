"use client";

import { ButtonExit, Text } from "./SignOutButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useModalWindow } from "@/src/hooks/useModalWindow";

function SignOutButton() {
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  return (
    <ButtonExit type="button" onClick={() => setModalToggle("logout")}>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <Text>Exit</Text>
    </ButtonExit>
  );
}

export default SignOutButton;
