import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { themeTitle } = useContext(ThemeContext);

  return (
    <Container
      maxWidth={false}
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <div className={`flex flex-col flex-grow main ${themeTitle}`}>
        {children}
      </div>
      <Footer />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
