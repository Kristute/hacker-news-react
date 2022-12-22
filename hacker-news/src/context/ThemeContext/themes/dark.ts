import { ThemeOptions } from "@mui/material";
import { amber, deepPurple, grey } from "@mui/material/colors";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: deepPurple[500],
      dark: deepPurple[100],
      light: amber[200],
    },
    secondary: {
      main: deepPurple[800],
      dark: deepPurple[900],
      light: grey[300],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
    divider: deepPurple[200],
    background: {
      default: deepPurple[400],
      paper: deepPurple[900],
    },
  },
};
