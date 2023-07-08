import { SideBarContainer } from "./SideBar.styled";

export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Link href="/">HOME</Link> */}
      <SideBarContainer>{children}</SideBarContainer>
    </>
  );
}
