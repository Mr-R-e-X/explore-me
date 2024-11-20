"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  setPresetTheme: (theme: string) => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const useCurrentTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>(
    JSON.stringify(localStorage.getItem("theme")!) || "light"
  );
  const setPresetTheme = (newTheme: string) => {
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setPresetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContextProvider, useCurrentTheme };
