import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main ${theme}`}>
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
