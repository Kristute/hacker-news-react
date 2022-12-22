import { useState, useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

import { ColorModeContext } from "./ColorModeContext";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";

type Props = {
  children?: React.ReactNode;
};

export const ToggleColorMode = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
