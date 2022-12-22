import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./ColorModeContext";

const ThemeSwitch = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "auto",
        alignItems: "center",
        justifyContent: "right",
        color: "text.primary",
      }}
    >
      <Box
        onClick={colorMode.toggleColorMode}
        sx={{
          bgcolor: "background.default",
          px: 2,
          py: 1,
          borderRadius: 1,
          cursor: "pointer",
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} color="inherit">
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

export default ThemeSwitch;
