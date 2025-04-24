"use client";

import { createContext, useContext } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always use light theme
  const isDarkMode = false;

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 