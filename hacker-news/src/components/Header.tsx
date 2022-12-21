import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";

import Logo from "../assets/img/hacker-logo.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <img src={Logo} width={"100%"} height={30} alt="Logo" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
