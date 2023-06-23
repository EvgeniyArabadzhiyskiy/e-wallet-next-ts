"use client";

import { LogoutButton } from "../AuthButtons/AuthButtons";
import LogoutBtn from "../Buttons/LogoutBtn/LogoutBtn";

export default function ModalLogOut() {
  return (
    <>
      <h1>LodOut Modal</h1>
      <LogoutButton />
      <LogoutBtn modalName="logout" type="cancel" />
    </>
  );
}
