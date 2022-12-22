import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, SxProps } from "@mui/material";

import Logo from "../assets/img/hacker-logo.png";
import { ThemeSwitch } from "../context/ThemeContext/ThemeContext";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between" } as SxProps}
      >
        <Box>
          <img src={Logo} width={"100%"} height={30} alt="Logo" />
        </Box>
        <Box>
          <ThemeSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
