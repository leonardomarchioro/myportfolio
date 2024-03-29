import React, { useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./colors";
import { useLoading } from "../../LoadingProvider";

interface Ivalues {
  handleTheme: () => void;
  mode: string;
  theme: DefaultTheme;
}

export const ThemeContext = React.createContext({} as Ivalues);

const StyledThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState("dark");
  const { loading } = useLoading()

  const handleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  const theme: DefaultTheme = mode === "light" ? {...lightTheme, loading} : {...darkTheme, loading};
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          handleTheme,
          mode,
          theme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
export default StyledThemeProvider;

export const useTheme = () => useContext(ThemeContext);
