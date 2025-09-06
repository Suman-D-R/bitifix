'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface AppContextType {
  // Add other context properties here as needed
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const value: AppContextType = {
    // Add other context values here as needed
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
