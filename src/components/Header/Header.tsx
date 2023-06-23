"use client";

import { useContext } from "react";
import AuthMenu from "../AuthMenu/AuthMenu";
import {
  HeaderWrapper,
  StyledHeader,
  TextName,
  UserBox,
} from "./Header.styled";
import { useSession } from "next-auth/react";
import { GlobalContext } from "../GlobalProvider/GlobalProvider";
import LogoutBtn from "../Buttons/LogoutBtn/LogoutBtn";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}

export default function Header({ currentUser }: { currentUser?: any }) {
  const user = useSession();
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  console.log("Header re-re");

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <UserBox>
            <TextName>SERVER USER {currentUser?.user.user.firstName}</TextName>
            <LogoutBtn modalName="logout" type="exit" />
          </UserBox>
          {/* <AuthMenu /> */}
          {/* <TextName>{user.data?.user.user.firstName}</TextName> */}
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
