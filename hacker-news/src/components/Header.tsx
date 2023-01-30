import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Link } from "@mui/material";

import Logo from "../assets/img/hacker-logo.png";
import ThemeSwitch from "../context/ThemeContext/ThemeSwitch";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Link href="/">
          <img src={Logo} width={"100%"} height={30} alt="Logo" />
          </Link>
        </Box>
        <Box>
          <ThemeSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
