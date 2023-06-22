"use client";

import { useContext } from "react";
import AuthMenu from "../AuthMenu/AuthMenu";
import { StyledHeader, TextName } from "./Header.styled";
import { useSession } from "next-auth/react";
import { GlobalContext } from "../GlobalProvider/GlobalProvider";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}


export default function Header({ currentUser }: { currentUser?: any }) {
  const user = useSession();
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <AuthMenu />
      <TextName>{user.data?.user.user.firstName}</TextName>
      {/* <TextName>SERVER USER {currentUser?.user.user.firstName}</TextName> */}
      {/* <h2>Balance: {currentUser?.user.user.balance}</h2> */}
      <button type="button" onClick={() => setIsModalOpen(true)}>Open</button>
    </StyledHeader>
  );
}
