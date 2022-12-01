import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../../../assets/img/hacker-logo.png";
import { Button } from "../../Button/Button";
import { ThemeContext } from "../../../context/ThemeContext";
import "./Header.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar className="header">
        <div>
          <img src={Logo} width={"100%"} height={30} alt="Logo" />
        </div>
        <Button type={"switch"} theme={theme} onClick={toggleTheme}>
          {theme}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
