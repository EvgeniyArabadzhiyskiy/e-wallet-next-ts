"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

//====================== НЕ ИСПОЛЬЗУЮ ================================
export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10, padding: 20 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/about" style={{ marginRight: 10, padding: 20 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10, padding: 20 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
