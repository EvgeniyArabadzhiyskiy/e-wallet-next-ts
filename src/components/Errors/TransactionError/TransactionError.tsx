import { ErrorText } from "../ErrorText.styled";
import CancelButton from "../../Buttons/CancelButton";
import { getErrorMessage } from "@/src/helpers/getErrorMessage";
import { ButtonWrapper } from "./TransactionError.styled";

interface IProps {
  error: string;
  resetError: () => void
}

function TransactionError({ error, resetError }: IProps) {
  const errorMessage = getErrorMessage(error);

  const handleCancelError = () => {
    resetError();
  }
  return (
    <>
      <ErrorText as="p" mb={30} color="secondaryErrorText" fontSize="20px">
        There was a problem
      </ErrorText>

      <ErrorText as="p" mb={30} color="white" fontSize="ml" fontWeight="bold">
        {errorMessage.reason}
      </ErrorText>

      <ErrorText as="p" color="primaryErrorText" fontSize={["m"]}>
        {errorMessage.text}
      </ErrorText>

      <ButtonWrapper>
        <CancelButton onClick={handleCancelError}>CANCEL</CancelButton>
      </ButtonWrapper>
    </>
  );
}

export default TransactionError;
