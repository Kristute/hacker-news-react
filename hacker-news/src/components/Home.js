import React, { StrictMode, useState } from "react";
import { Pagination, Box, Container } from "@mui/material";
import { default as data } from "../services/MOCK_DATA.json";
import Header from "./Header";
import Footer from "./Footer";
import ThemeContext from "./ThemeContext";
import usePagination from "./Pagination";

import News from "./News";

const Home = () => {
  const theme = useState("#7986cb");
  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div style={{ backgroundColor: "#e8eaf6" }}>
          <Header />
          <Container maxWidth="false" className="main">
            <Box>
              <News />
            </Box>
            <Box p="5">
              {/* TODO: adjust data for pagination */}
              {/* <List p="10" pt="3" spacing={2}>
                    {_DATA.currentData().map(v => {
                      return (
                        <ListItem key={v.id} liststyletype="disc">
                          <span>{v.sku}</span>{" "}
                          <Divider display="inline" orientation="vertical" />
                          <span> {v.category_type}</span>{" "}
                          <Divider display="inline" orientation="vertical" />
                          <span>
                          </span>
                        </ListItem>
                      );
                    })}
                  </List> */}

              <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </Box>
          </Container>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default Home;
