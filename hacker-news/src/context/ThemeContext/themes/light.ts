import { ThemeOptions } from "@mui/material";
import { amber, grey, red } from "@mui/material/colors";
import { THEME } from "../ColorModeContext";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: THEME.LIGHT,
    primary: {
      main: amber[500],
      dark: red[800],
      light: red[500],
    },
    secondary: {
      main: grey[800],
      dark: amber[900],
      light: grey[700],
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
    divider: amber[200],
    background: {
      default: amber[50],
      paper: grey[50],
    },
  },
};
