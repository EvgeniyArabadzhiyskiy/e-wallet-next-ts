"use client";

import { ButtonExit, Text } from "./SignOutButton.styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useModalWindow } from "@/src/hooks/useModalWindow";
import ExitSvg from "../../SvgComponent/ExitSvg";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function SignOutButton({ ...allProps }: IProps) {
  const setModalOpen = useModalWindow((state) => state.setModalToggle);

  return (
    <ButtonExit
      type="button"
      onClick={() => setModalOpen("logout")}
      {...allProps}
    >
      {/* <FontAwesomeIcon icon={faArrowRightFromBracket} /> */}
      <ExitSvg width={18} height={18} />
      <Text>Exit</Text>
    </ButtonExit>
  );
}

export default SignOutButton;
