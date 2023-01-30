import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useColorContext, THEME } from "./ColorModeContext";
import { Typography } from "@mui/material";

const ThemeSwitch = () => {
  const theme = useTheme();
  const colorMode = useColorContext();
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
        <IconButton sx={{ ml: 1 }} color="inherit">
          <Typography variant="body2" component="span" mr={2}>
            {theme.palette.mode} mode
          </Typography>
          {theme.palette.mode === THEME.DARK ? (
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
