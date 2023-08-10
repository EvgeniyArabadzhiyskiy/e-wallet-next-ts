"use client";

import {
  HeaderWrapper,
  StyledHeader,
  TextName,
  UserBox,
} from "./Header.styled";

import LogoutBtn from "../Buttons/LogoutBtn/LogoutBtn";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ModalBox from "../ModalWindow/ModalBox";
import ModalLogOut from "../ModalLogOut/ModalLogOut";
import AuthButton from "../Buttons/AuthButton/AuthButton";
import { useUser } from "@/src/hooks/useUser";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}

export default function Header({ currentUser }: { currentUser?: any }) {
  const { user, isLoading } = useUser() 

  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderWrapper>
            <Logo />
            <UserBox>
              <ThemeToggle />
              <TextName>
                {isLoading ? <>Loa</> : user?.firstName}
              </TextName>
              {/* <TextName>SERVER USER {currentUser?.user.user.firstName}</TextName> */}
              {/* <LogoutBtn modalName="logout" type="exit" /> */}
              <AuthButton /> 
            </UserBox>
            {/* <h2>Balance: {currentUser?.user.user.balance}</h2> */}
          </HeaderWrapper>
        </Container>
      </StyledHeader>

      <ModalBox modalName="logout">
        <ModalLogOut />
      </ModalBox>
    </>
  );
}
