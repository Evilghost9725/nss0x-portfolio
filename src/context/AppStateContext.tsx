'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppPhase, Theme, CursorType, AppContextType } from '@/types/appPhases';

const AppStateContext = createContext<AppContextType | undefined>(undefined);

interface AppStateProviderProps {
  children: ReactNode;
}

export function AppStateProvider({ children }: AppStateProviderProps) {
  const [phase, setPhase] = useState<AppPhase>('BOOTING');
  const [theme, setTheme] = useState<Theme>('terminal');
  const [cursor, setCursor] = useState<CursorType>('default');
  const [isLoading, setIsLoading] = useState(false);

  const value: AppContextType = {
    phase,
    theme,
    cursor,
    isLoading,
    setPhase,
    setTheme,
    setCursor,
    setIsLoading,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}
