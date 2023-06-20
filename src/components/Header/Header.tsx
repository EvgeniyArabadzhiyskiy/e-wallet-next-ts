"use client";

import AuthMenu from "../AuthMenu/AuthMenu";
import { StyledHeader, TextName } from "./Header.styled";
import { useSession } from "next-auth/react";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}


export default function Header({ currentUser }: { currentUser?: any }) {
  const user = useSession()

  return (
    <StyledHeader>
      <AuthMenu />
      <TextName>{user.data?.user.user.firstName}</TextName>
      <TextName>SERVER USER {currentUser?.user.user.firstName}</TextName>
      <h2>Balance: {currentUser?.user.user.balance}</h2>
    </StyledHeader>
  );
}
