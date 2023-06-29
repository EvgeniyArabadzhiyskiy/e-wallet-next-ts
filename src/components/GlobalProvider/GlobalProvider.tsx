"use client";

import { useThemeCookies } from "@/src/hooks/useThemeCookies";
import React, { useContext, useState } from "react";
import { createContext } from "react";

export interface ModalState  {
  [key: string]: boolean;
};

interface GlobalContextType {
  isModalOpen: ModalState;
  setIsModalOpen: React.Dispatch<React.SetStateAction<ModalState>>;
  
  isLoading: boolean;
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default function GlobalProvider({children}: {children: React.ReactNode}) {
  const { isLoading, theme, setTheme } = useThemeCookies();
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({});

  return (
    <GlobalContext.Provider value={{ isModalOpen, setIsModalOpen, isLoading, theme, setTheme }}>
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

