"use client";

import ErrorPage from "@/src/components/Errors/ErrorPage";

interface IProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: IProps) {
  return <ErrorPage error={error} resetError={reset} />;
}
