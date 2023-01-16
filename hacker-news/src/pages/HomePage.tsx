import { Box, Container } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

import News from "../components/News/News";
import ErrorBoundary from "../components/ErrorBoundary";

const HomePage = () => {

  return (
    <MainLayout>
      <Container maxWidth={false} className="main">
      <Box
                sx={{
                    margin: "auto",
                    width: "fit-content",
                    alignItems: "center",
                }}
            >
            </Box>
        <Box>
          <ErrorBoundary>
            <News />
          </ErrorBoundary>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
