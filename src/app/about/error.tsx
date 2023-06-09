"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // console.log("error:", error.message);

  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error)
  // }, [error])
  
  return (
    <>
      <h1>{error.message}</h1>
      <button type="button" onClick={reset}>
        Try Again
      </button>
    </>
  );
}
