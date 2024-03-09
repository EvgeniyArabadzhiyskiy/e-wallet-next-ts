import { ErrorText } from "../ErrorText.styled";
import CancelButton from "../../Buttons/CancelButton";
import { getMessageForError } from "@/src/helpers/getMessageForError";
import { ButtonWrapper } from "./CreateTransactionError.styled";
import { useModalWindow } from "@/src/hooks/useModalWindow";

interface IProps {
  error: string;
  resetError: () => void
}

function CreateTransactionError({ error, resetError }: IProps) {
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  const errorMessage = getMessageForError(error);

  const onCancelError = () => {
    resetError();
    setModalToggle("transaction");
  }
  return (
    <>
      <ErrorText as="p" mb={30} color="#10b981" fontSize="20px">
        There was a problem
      </ErrorText>

      <ErrorText as="p" mb={30} color="primaryBtn" fontSize="ml" fontWeight="bold">
        {errorMessage.reason}
      </ErrorText>

      <ErrorText as="p" color="#a1a1aa" fontSize={["m"]}>
        {errorMessage.text}
      </ErrorText>

      <ButtonWrapper>
        <CancelButton
          cancelText="CANCEL"
          onClick={onCancelError}
        />
      </ButtonWrapper>
    </>
  );
}

export default CreateTransactionError;
