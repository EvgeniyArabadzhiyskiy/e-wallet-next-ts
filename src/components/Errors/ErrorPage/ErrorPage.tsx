import LinkButton from "../../Buttons/LinkButton";
import EnterButton from "../../Buttons/EnterButton";
import { ErrorText } from "../ErrorText.styled";
import { ButtonWrapper, ErrorContainer } from "./ErrorPage.styled";
import { getErrorMessage } from "@/src/helpers/getErrorMessage";

interface IProps {
  error: Error;
  resetError: () => void;
}

function ErrorPage({ error, resetError }: IProps) {
  const errorMessage = getErrorMessage(error.message);

  return (
    <ErrorContainer>
      <ErrorText as="p" mb={30} color="#10b981" fontSize="20px">
        There was a problem
      </ErrorText>

      <ErrorText as="p" mb={30} color="primaryBtn" fontSize="34px" fontWeight="bold">
        {errorMessage.reason}
      </ErrorText>

      <ErrorText as="p" color="#a1a1aa" fontSize={["m"]}>
        {errorMessage.text}
      </ErrorText>

      <ButtonWrapper>
        <EnterButton
          type="button"
          height={50}
          maxWidth="180px"
          onClick={resetError}
        >
          Try again
        </EnterButton>

        <LinkButton href="/" text="Go back home" maxWidth="180px" />
      </ButtonWrapper>
    </ErrorContainer>
  );
}

export default ErrorPage;
