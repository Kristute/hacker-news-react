import { useState, useEffect } from "react";
import Story from "./Story";

const News = () => {
  const [news, setNews] = useState([]);
  const LIMIT = 50;

  useEffect(() => {
    requestComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestComments() {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=${LIMIT}`
    );
    const json = await res.json();

    setNews(json);
  }

  return (
    <div className="search">
      {news.length !== 0 ? (
        news.map((item) => {
          return <Story key={item} item={item} />;
        })
      ) : (
        <h1>No News Found</h1>
      )}
    </div>
  );
};

export default News;
