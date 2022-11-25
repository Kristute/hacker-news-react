// import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import ThemeContext from "../../context/ThemeContext/ThemeContext";
import Logo from "../../assets/img/hacker-logo.png";
import { SxProps } from "@mui/material";

const Header = () => {
  // const [theme] = useContext(ThemeContext);
  // const [theme, setTheme] = React.useState(Theme.Light);

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
