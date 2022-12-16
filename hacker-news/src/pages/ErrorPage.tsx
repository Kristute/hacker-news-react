import { Box, Link, Typography } from "@mui/material";
import EmptyLayout from "../layouts/EmptyLayout";

const ErrorPage = () => {
  return (
    <EmptyLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#5727b021",
        }}
      >
        <Typography variant="h1" style={{ color: "#8827b0" }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: "#8827b0" }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Link
          href="/"
          sx={{
            backgroundColor: "#8827b0",
            color: "white",
            padding: "20px 40px",
            marginTop: "20px",
            borderRadius: "30px",
            textDecoration: "none",
            textTransform: "upperCase",
            fontWeight: "bold",
          }}
        >
          Back Home
        </Link>
      </Box>
    </EmptyLayout>
  );
};

export default ErrorPage;
