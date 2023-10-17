"use client";

import { useGlobalState } from "../../GlobalProvider/GlobalProvider";
import { ButtonExit, Text } from "./SignOutButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function SignOutButton() {
  const { setModalToggle } = useGlobalState();

  return (
    <ButtonExit type="button" onClick={() => setModalToggle("logout")}>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <Text>Exit</Text>
    </ButtonExit>
  );
}

export default SignOutButton;
