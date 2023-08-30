import { Box } from "../../Box/Box";
import CancelButton from "../../Buttons/CancelButton/CancelButton";
import { useGlobalState } from "../../GlobalProvider/GlobalProvider";
import { ErrorText, ErrorTitle } from "./CreateTransactionError.styled";

interface IProps {
  error: any;
}

function CreateTransactionError({ error }: IProps) {
  const { setModalToggle } = useGlobalState();

  const getMessageForError = (errorCode: string) => {
    switch (errorCode) {
      case '401':
        return "You are not authorized to access this resource. Please log in or authenticate to proceed.";
      case '404':
        return "Oops, the page you're looking for doesn't exist. Please check the URL and try again.";
      default:
        return `An error occurred ${errorCode}. Please try again later.`;
    }
  };

  const errorMessage = getMessageForError(error.message);
  return (
    <>
      <ErrorTitle>There was a problem</ErrorTitle>
      <ErrorText>{errorMessage}</ErrorText>
      <Box mt={120} >
        <CancelButton
          cancelText="cancel"
          onClick={() => setModalToggle("transaction")}
        />
      </Box>
    </>
  );
}

export default CreateTransactionError;
