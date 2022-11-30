import * as React from "react";
import { StrictMode } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import '../src/assets/css/styles.css';

const App: React.FC = () => {

  return (
    <StrictMode>
      <ThemeProvider >
        <HomePage />
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
