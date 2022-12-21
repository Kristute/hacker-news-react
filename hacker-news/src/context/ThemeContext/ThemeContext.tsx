import { createContext, useContext, useState, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {
  useTheme,
  ThemeProvider,
  createTheme,
  SxProps,
} from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import getDesignTokens from "./colors";

type Props = {
  children?: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeSwitch = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={
        {
          display: "flex",
          width: "auto",
          alignItems: "center",
          justifyContent: "right",
          color: "text.primary",
          m: 3,
        } as SxProps
      }
    >
      <Box
        onClick={colorMode.toggleColorMode}
        sx={
          {
            bgcolor: "background.default",
            px: 2,
            py: 1,
            borderRadius: 1,
            cursor: "pointer",
          } as SxProps
        }
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 } as SxProps} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
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
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ThemeSwitch />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
