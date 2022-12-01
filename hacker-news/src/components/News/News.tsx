import { useState, useEffect, useCallback } from "react";
import { Grid, Typography } from "@mui/material";

import Story from "../Story/Story";

const News = () => {
  const [news, setNews] = useState([]);
  const LIMIT = 50;

  const requestNews = useCallback(async () => {
    // TODO: adjust link for pagination
    const response = await fetch(
      // `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&limitToFirst=${LIMIT}`
      `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${LIMIT}"&endAt="80"`
    );
    const newsFromResponse = await response.json();

    setNews(Object.values(newsFromResponse));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    requestNews();
  }, [requestNews]);

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid item sx={{ width: "100%" }}>
        {Object.keys(news).length !== 0 ? (
          news.map((item) => {
            return <Story key={item} item={item} />;
          })
        ) : (
          <Typography variant="h5" component="h3">
            No News Found
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default News;
