"use client";

import { useLoading } from "../hooks/useModalWindow";

const Spiner = () => {
  const { isLoading } = useLoading();
  return (
    isLoading && (
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 56,
          color: "white",
        }}
      >
        Loading...
      </h1>
    )
  );
};

export default Spiner;
