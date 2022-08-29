import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./colors";

interface Ivalues {
  handleTheme: () => void;
  mode: string;
}

export const ThemeContext = React.createContext({} as Ivalues);

const StyledThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState(
    localStorage.getItem("@MotorShop:Theme.mode") || "light"
  );

  const handleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  const colors: DefaultTheme = mode === "light" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={colors}>
      <ThemeContext.Provider
        value={{
          handleTheme,
          mode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
export default StyledThemeProvider;
