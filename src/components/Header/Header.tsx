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
import { GlobalContext, useGlobalState } from "../GlobalProvider/GlobalProvider";
import LogoutBtn from "../Buttons/LogoutBtn/LogoutBtn";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import { darkTheme, lightTheme } from "@/src/styles/theme/theme";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}

export default function Header({ currentUser }: { currentUser?: any }) {
  const user = useSession();
  const isLading = user.status === 'loading'
  // const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);
  const { theme, setTheme} = useGlobalState();

  const onToggleTheme = () => {
    if (theme.type === 'light') {
      setTheme(darkTheme)
    }

    if (theme.type === 'dark') {
      setTheme(lightTheme)
    }
  }

  // console.log("Header re-re");

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <UserBox>
            <button type="button" onClick={onToggleTheme}>Theme</button>
          <TextName>{isLading ? <>Load</> : user.data?.user.user.firstName}</TextName>
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
