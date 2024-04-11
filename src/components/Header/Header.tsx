import {
  HeaderWrapper,
  StyledHeader,
  TextName,
  UserBox,
} from "./Header.styled";


import Logo from "../Logo";
import Container from "../Container";
import ModalBox from "../ModalWindow";
import ModalLogOut from "../ModalLogOut";
import SignOutButton from "../Buttons/SignOutButton";
import { currentUser } from "@/src/apiWallet/user";

export default async function Header() {
  const user = await currentUser();

  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderWrapper>
            <Logo />
            <UserBox>
              {user && <TextName>{user.firstName}</TextName>}
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
