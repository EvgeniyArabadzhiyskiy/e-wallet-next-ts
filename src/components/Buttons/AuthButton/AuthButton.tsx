"use client";

import { useGlobalState } from "../../GlobalProvider/GlobalProvider";
import { ButtonExit, LinkSignIn, Text } from "./AuthButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@/src/hooks/useUser";

function AuthButton() {
  const { user } = useUser();
  const { setModalToggle } = useGlobalState();

  const ButtonSignOut = (
    <ButtonExit type="button" onClick={() => setModalToggle("logout")}>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <Text>Exit</Text>
    </ButtonExit>
  );

  const ButtonSignIn = (
    <LinkSignIn href="/login">
      <FontAwesomeIcon icon={faArrowRightToBracket} />
      <Text>Sign In</Text>
    </LinkSignIn>
  );

  return <>{user ? ButtonSignOut : ButtonSignIn}</>;
}

export default AuthButton;
