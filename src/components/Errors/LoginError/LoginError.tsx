import { Box } from "../../Box/Box";
import LinkButton from "../../Buttons/LinkButton";
import { ErrorText } from "../ErrorText.styled";


interface IProps {
    errorMessage: string;
    // resetError: () => void
  }
  
  function LoginError({ errorMessage }: IProps) {
    // const { setModalToggle } = useGlobalState();
  
    // const errorMessage = getMessageForError(error.message);
  
    const onCancelError = () => {
    //   resetError();
    }
    return (
      <>
        <ErrorText as="p" mb={30} color="#10b981" fontSize="20px">
          There was a problem
        </ErrorText>
  
        <ErrorText as="p" mb={30} color="primaryBtn" fontSize="ml" fontWeight="bold">
          {errorMessage}
        </ErrorText>

        <Box display="flex" justifyContent="center" >
          <LinkButton href="/login" text="Go back" maxWidth="180px" />
        </Box>
  
        {/* <ErrorText as="p" color="#a1a1aa" fontSize={["m"]}>
          {errorMessage.text}
        </ErrorText> */}
  
        {/* <ButtonWrapper>
          <CancelButton
            cancelText="CANCEL"
            onClick={onCancelError}
          />
        </ButtonWrapper> */}
      </>
    );
  }
  
  export default LoginError;