import { useState, useMemo, useCallback } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

import { ColorModeContext, THEME } from "./ColorModeContext";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

type Props = {
  children?: React.ReactNode;
};

export const ToggleColorMode = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>(THEME.LIGHT);

  // The dark mode switch would invoke this method
  const toggleColorMode = useCallback(() => {
    setMode((prevMode: PaletteMode) =>
      prevMode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    );
  }, []);

  const value = useMemo(
    () => ({
      currentTheme: mode,
      toggleColorMode,
    }),
    [mode, toggleColorMode]
  );

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(mode === THEME.LIGHT ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
