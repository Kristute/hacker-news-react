import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Story from "./Story";

const News = () => {
  const [news, setNews] = useState([]);
  const LIMIT = 50;

  useEffect(() => {
    requestComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestComments() {
    // TODO: adjust link for pagination
    const res = await fetch(
      // `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=${LIMIT}`
      `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&startAt="${LIMIT}"&endAt="80"`
    );
    const json = await res.json();

    setNews(Object.values(json));
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid item sx={{ width: "100%" }}>
        {news.length !== 0 ? (
          news.map((item) => {
            return <Story key={item} item={item} />;
          })
        ) : (
          <Typography variant="h5" component="div">
            No News Found
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default News;
