import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ThemeContext from "./ThemeContext";
import Logo from "../assets/img/hacker-logo.png";

const Header = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: theme }}>
        <Toolbar>
          <div>
            <img src={Logo} width={"100%"} height={30} alt="Logo" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
