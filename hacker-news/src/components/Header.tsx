import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../assets/img/hacker-logo.png";
import { Button } from "./Button/Button";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";

const Header = () => {
  const { themeTitle, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar className="header">
        <div>
          <img src={Logo} width={"100%"} height={30} alt="Logo" />
        </div>
        <Button type={"primary"} onClick={toggleTheme}>
          {themeTitle}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
