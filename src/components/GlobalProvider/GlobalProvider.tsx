"use client";

import React, { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext<any | undefined>(undefined);

export default function GlobalProvider({children}: {children: React.ReactNode}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
