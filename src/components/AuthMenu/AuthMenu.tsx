"use client";

import { useSession } from "next-auth/react";
import {
  LoginButton,
  RegisterButton,
  LogoutButton,
} from "../AuthButtons/AuthButtons";

function AuthMenu() {
  const { data: session } = useSession();
//   console.log("AuthMenu  session:", session?.user);

  return (
    <div style={{ paddingBottom: "50px", background: "#9d817c" }}>
      {!session?.user ? <LoginButton /> : <LogoutButton />}
    </div>
  );
}

export default AuthMenu;
