import * as React from "react";
import { StrictMode, useState } from "react";
// import { ThemeContext, Theme } from "./context/ThemeContext/ThemeContext";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";
import HomePage from "./pages/HomePage";

type Props = {
  children?: React.ReactNode;
};

const App: React.FC<Props> = ({ children }) => {
  // const theme = useState<any>("#7986cb");
  // const [theme, setTheme] = useState(Theme.Light);
  const [theme, setTheme] = useState<any>("#7986cb");

  return (
    <StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <HomePage />
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
