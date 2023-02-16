import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ThemeProvider from "../src/context/ThemeContext/ThemeContext";
import ErrorBoundary from "../src/components/ErrorBoundary";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </ErrorBoundary>
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
};

export default App;
