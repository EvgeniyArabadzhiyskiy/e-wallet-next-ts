"use client";

import {
  HeaderWrapper,
  StyledHeader,
  TextName,
  UserBox,
} from "./Header.styled";
import { useSession } from "next-auth/react";

import LogoutBtn from "../Buttons/LogoutBtn/LogoutBtn";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}

export default function Header({ currentUser }: { currentUser?: any }) {
  const user = useSession();
  const isLading = user.status === "loading";

  // console.log("Header re-re");

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <UserBox>
            <ThemeToggle />
            <TextName>
              {isLading ? <>Load</> : user.data?.user.user.firstName}
            </TextName>
            {/* <TextName>SERVER USER {currentUser?.user.user.firstName}</TextName> */}
            <LogoutBtn modalName="logout" type="exit" />
          </UserBox>
          {/* <AuthMenu /> */}
          {/* <h2>Balance: {currentUser?.user.user.balance}</h2> */}
          {/* <button type="button" onClick={() => setIsModalOpen(true)}>Open</button> */}
          {/* <button
        type="button"
        onClick={() =>
          setIsModalOpen((prev: any) => ({ ...prev, logout: true }))
        }
      >
        Open
      </button> */}
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}
