import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../src/components/ErrorBoundary";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default App;
