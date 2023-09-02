import LinkButton from "../../Buttons/LinkButton";
import EnterButton from "../../Buttons/EnterButton";
import { ErrorText } from "../ErrorText.styled";
import { ButtonWrapper } from "./ErrorPage.styled";
import { getMessageForError } from "@/src/helpers/getMessageForError";

interface IProps {
  error: Error;
  resetError: () => void;
}

function ErrorPage({ error, resetError }: IProps) {
  const errorMessage = getMessageForError(error.message);

  return (
    <div style={{ padding: "30px" }}>
      <ErrorText as="p" mb={30} color="#10b981" fontSize="20px">
        There was a problem
      </ErrorText>

      <ErrorText as="p" mb={30} color="primaryBtn" fontSize="xl" fontWeight="bold">
        {errorMessage.reason}
      </ErrorText>

      <ErrorText as="p" color="#a1a1aa" fontSize={["m"]}>
        {errorMessage.text}
      </ErrorText>

      <ButtonWrapper>
        <EnterButton
          height={50}
          maxWidth="150px"
          enterText="Try again"
          onClick={resetError}
        />

        <LinkButton href="/" text="Go back home" maxWidth="180px" />
      </ButtonWrapper>
    </div>
  );
}

export default ErrorPage;
