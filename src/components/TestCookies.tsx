"use client";

import { cookies } from "next/headers";
import { setCookie } from "nookies";

const TestCookies = ({ children }: { children: React.ReactNode }) => {
  const rrr = () => {
    setCookie(null, "authToken", `${"DjonSuperPuper"}`, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  };

  return (
    <>
      {children}
      <button type="button" onClick={rrr}>
        CLICK
      </button>
    </>
  );
};

export default TestCookies;
