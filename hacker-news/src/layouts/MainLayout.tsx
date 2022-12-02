import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
