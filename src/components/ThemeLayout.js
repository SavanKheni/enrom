"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("isDark");
    if (isDark !== null) {
      setDarkMode(isDark !== "false");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("isDark", newDarkMode);
  };

  const theme = useMemo(() => {
    return {
      isDarkMode,
      toggleTheme,
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>{children}</div>
    </ThemeContext.Provider>
  );
}
