import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { SxProps } from "@mui/material";

import Logo from "../../assets/img/hacker-logo.png";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "orange" } as SxProps}>
      <Toolbar>
        <div>
          <img src={Logo} width={"100%"} height={30} alt="Logo" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
