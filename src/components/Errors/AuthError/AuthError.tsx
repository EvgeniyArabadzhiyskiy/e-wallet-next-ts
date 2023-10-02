import { Dispatch, SetStateAction } from "react";
import { ErrorText } from "../ErrorText.styled";
import LinkButton from "../../Buttons/LinkButton";
import { ButtonWrapper } from "./AuthError.styled";
import EnterButton from "../../Buttons/EnterButton";

interface IProps {
  href: string;
  text: string;
  errorMessage: string;
  resetError: Dispatch<SetStateAction<string>>;
}

function AuthError({ href, text, errorMessage, resetError }: IProps) {
  return (
    <>
      <ErrorText as="p" mb={30} color="#10b981" fontSize="20px">
        There was a problem
      </ErrorText>
  
      <ErrorText as="p" mb={30} color="primaryBtn" fontSize="ml" fontWeight="bold">
        {errorMessage}
      </ErrorText>

      <ButtonWrapper>
        {/* <LinkButton href="/login" text="Go back" maxWidth="180px" /> */}
        <EnterButton
          height={50}
          maxWidth="180px"
          enterText="Try again"
          onClick={() => resetError("")}
        />
        <LinkButton href={href} text={text} maxWidth="180px" />
      </ButtonWrapper>
    </>
  );
}

export default AuthError;
