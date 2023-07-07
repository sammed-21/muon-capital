import React, { createContext, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const theme = darkMode ? "dark" : "light";
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
