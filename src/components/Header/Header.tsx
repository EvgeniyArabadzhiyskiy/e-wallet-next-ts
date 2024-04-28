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

// import stl from "./Header.module.scss";

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

       {/* <header className={stl.header}>
        <Container>
          <div className={stl.header__wrapper}>
            <Logo />
            <div className={stl.user__box}>
              {user && <div className={stl.user__name}>{user.firstName}</div>}
              <SignOutButton />
            </div>
          </div>
        </Container>
      </header> */}

      <ModalBox modalName="logout">
        <ModalLogOut />
      </ModalBox>
    </>
  );
}
