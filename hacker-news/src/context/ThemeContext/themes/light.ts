import { ThemeOptions } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: amber[500],
      dark: amber[900],
      light: amber[600],
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
      default: amber[800],
      paper: amber[50],
    },
  },
};
