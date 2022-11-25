import * as React from "react";
// import { useState } from "react";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

type Props = {
  children?: React.ReactNode
};

const MainLayout: React.FC<Props> = ({children}) => {
  //const theme = useState<string>("#e8eaf6");

  return (
    // <div style={{ backgroundColor: theme }}>
    <div>
      <Header />
      <div className="flex flex-col flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
