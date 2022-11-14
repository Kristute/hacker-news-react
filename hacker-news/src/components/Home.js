import React, { StrictMode, useState } from "react";
// import { Pagination, Box, List, ListItem, Divider } from '@mui/material';
import { Pagination, Box, List } from "@mui/material";
import { default as data } from "../services/MOCK_DATA.json";
import Header from "./Header";
import Footer from "./Footer";
import NewsList from "./NewsList";
import ThemeContext from "./ThemeContext";
import usePagination from "./Pagination";

// const API_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const news = [
  {
    by: "blowski",
    id: 33544881,
    kids: [33546070],
    parent: 33544404,
    text: "&gt; I think the main issue a media company like the BBC has with moderation, is that they want to discourage harassment of their employees<p>That&#x27;s certainly one issue, but there are many others. Owning your own Mastodon server should make it easier to find a solution compared to having to use Twitter&#x27;s tools.<p>&gt;  It would end up the way some people say today, &quot;You can&#x27;t run your own email server&quot; because Google and Microsoft<p>There are more trusted email servers than just those two. Fastmail, Apple, Yahoo all come to mind. Albeit that&#x27;s not the perfectly distributed model, I would rather an oligopoly like that than just Twitter.<p>Highlighting ways in which Mastodon is not utopia isn&#x27;t a valid reason to stick with what we&#x27;ve got.",
    time: 1668078664,
    type: "comment",
  },
  {
    by: "BXWPU",
    descendants: 168,
    id: 33544883,
    kids: [33546788, 33545500],
    score: 475,
    time: 1668078686,
    title: "Accidental Google Pixel Lock Screen Bypass",
    type: "story",
    url: "https://bugs.xdavidhu.me/google/2022/11/10/accidental-70k-google-pixel-lock-screen-bypass/",
  },
  {
    by: "yrro",
    id: 33544880,
    parent: 33538456,
    text: "The Greater Internet Fuckwad Theory",
    time: 1668078662,
    type: "comment",
  },
  {
    by: "educated",
    descendants: 45,
    id: 33590447,
    kids: [33591646, 33590870, 33590903],
    score: 59,
    time: 1668403543,
    title: "Education as civilization-building",
    type: "story",
    url: "https://fchollet.substack.com/p/education-as-civilization-building",
  },
];

const Home = () => {
  const theme = useState("orange");
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
        <div className="App">
          <Header />
          {!news.length ? (
            <h1>No News Found</h1>
          ) : (
            <List sx={{ width: "100%" }}>
              {news &&
                news.map((item) => (
                  <NewsList
                    title={item.title}
                    key={item.id}
                    url={item.url}
                    by={item.by}
                    type={item.type}
                    text={item.text}
                  />
                ))}
            </List>
          )}

          <Box p="5">
            {/* TODO: adjust data */}
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
          <Footer />
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default Home;
