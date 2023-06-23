"use client";

import { useContext } from "react";
import LogoutBtn from "./Buttons/LogoutBtn/LogoutBtn";

export default function ModalSignUp() {
  return (
    <>
      <h1>SignUp Modal</h1>
      <LogoutBtn modalName="signup" type="cancel" />
    </>
  );
}
