import { Dispatch, SetStateAction } from "react";
import { ErrorText } from "../ErrorText.styled";
import LinkButton from "../../Buttons/LinkButton";
import { ButtonWrapper } from "./LoginError.styled";
import EnterButton from "../../Buttons/EnterButton";

interface IProps {
  errorMessage: string;
  resetError: Dispatch<SetStateAction<string>>;
}

function LoginError({ errorMessage, resetError }: IProps) {
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
        <LinkButton href="/register" text="Registration" maxWidth="180px" />
      </ButtonWrapper>
    </>
  );
}

export default LoginError;
