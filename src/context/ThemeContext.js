import React, { createContext, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
 
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
