import { PaletteMode } from "@mui/material";
import { amber, deepPurple, grey } from "@mui/material/colors";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
            link: amber[900],
            color1: grey[700],
          },
        }
      : {
          // palette values for dark mode
          primary: deepPurple,
          divider: deepPurple[900],
          background: {
            default: deepPurple[900],
            paper: deepPurple[700],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
            link: grey[200],
            color1: deepPurple[100],
          },
        }),
  },
});

export default getDesignTokens;
