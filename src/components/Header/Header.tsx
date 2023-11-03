import {
  HeaderWrapper,
  StyledHeader,
  TextName,
  UserBox,
} from "./Header.styled";

import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";
import Logo from "../Logo";
import Container from "../Container";
import ModalBox from "../ModalWindow";
import ModalLogOut from "../ModalLogOut";
import SignOutButton from "../Buttons/SignOutButton";
import ThemeToggle from "../ThemeToggle";

export default async function Header() {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.firstName;

  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderWrapper>
            <Logo />
            <UserBox>
              {/* <ThemeToggle /> */}
              <TextName>{userName}</TextName>
              <SignOutButton />
            </UserBox>
          </HeaderWrapper>
        </Container>
      </StyledHeader>

      <ModalBox modalName="logout">
        <ModalLogOut />
      </ModalBox>
    </>
  );
}
