"use client";

import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "@/src/styles/theme/theme";
import { CustomTheme } from "@/src/types/styled";
import React, { useContext, useState } from "react";
import { createContext } from "react";

export interface ModalState  {
  [key: string]: boolean;
};

interface GlobalContextType {
  isModalOpen: ModalState;
  setIsModalOpen: React.Dispatch<React.SetStateAction<ModalState>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  // theme: CustomTheme;
  // setTheme: React.Dispatch<React.SetStateAction<CustomTheme>>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default function GlobalProvider({children}: {children: React.ReactNode}) {

  // const [theme, setTheme] = useState<CustomTheme>(lightTheme);
  const [theme, setTheme] = useState<string>("light");
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({});

  return (
    <GlobalContext.Provider value={{ isModalOpen, setIsModalOpen, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error('useGlobalStete must be used within a GlobalProvider');
  }

  return context
};

