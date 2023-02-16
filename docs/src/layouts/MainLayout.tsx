import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Container
      maxWidth={false}
      sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
