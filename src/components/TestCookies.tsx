"use client";

import { setCookie } from "nookies";

const TestCookies = () => {
  const rrr = () => {
    setCookie(null, "authToken", `${"DjonSuperPuper"}`, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  };

  return (
    <>
      <button type="button" onClick={rrr}>
        CLICK
      </button>
    </>
  );
};

export default TestCookies;
