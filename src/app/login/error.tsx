"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>{error.message}</h1>
      <button type="button" onClick={reset}>
        Try Again
      </button>
    </>
  );
}
