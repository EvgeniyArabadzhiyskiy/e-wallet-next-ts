"use client";

import styled from "styled-components";
import { ErrorText } from "@/src/components/Errors/ErrorText.styled";
import { getMessageForError } from "@/src/helpers/getMessageForError";
import EnterButton from "@/src/components/Buttons/EnterButton/EnterButton";
import LinkButton from "@/src/components/Buttons/LinkButton/LinkButton";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  margin-top: 28px;
`

interface IProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: IProps) {
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
          onClick={reset}
        />

        <LinkButton href="/" text="Go back home" maxWidth="180px" />
      </ButtonWrapper>
    </div>
  );
}
