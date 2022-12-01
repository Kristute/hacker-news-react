import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import Logo from "../../assets/img/hacker-logo.png";

const Footer = () => {
  return (
    <Paper
      sx={{ marginTop: "calc(10% + 60px)", width: "100%", bottom: 0 }}
      component="footer"
      square
      variant="outlined"
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", my: 2 }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            pr: 2,
            borderRight: 1,
          }}
        >
          <div>
            <img src={Logo} width={"100%"} height={30} alt="Logo" />
          </div>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            ml: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
