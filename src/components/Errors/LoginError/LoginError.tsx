import { Box } from "../../Box/Box";
import { ErrorText } from "../ErrorText.styled";
import LinkButton from "../../Buttons/LinkButton";
import { ButtonWrapper } from "./LoginError.styled";

interface IProps {
  errorMessage: string;
}

function LoginError({ errorMessage }: IProps) {
  return (
    <>
      <ErrorText as="p" mb={30} color="#10b981" fontSize="20px">
          There was a problem
        </ErrorText>
  
        <ErrorText as="p" mb={30} color="primaryBtn" fontSize="ml" fontWeight="bold">
          {errorMessage}
        </ErrorText>

        {/* <Box display="flex" justifyContent="center" > */}
        {/* </Box> */}

        <ButtonWrapper>
          <LinkButton href="/login" text="Go back" maxWidth="180px" />

          <LinkButton href="/register" text="Registration" maxWidth="180px" />

        </ButtonWrapper>
        {/* <Box display="flex" justifyContent="center" mt={4} > */}
        {/* </Box> */}
    </>
  );
}

export default LoginError;
