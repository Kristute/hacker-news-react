import { useMemo } from "react";
import { Grid, SxProps } from "@mui/material";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";
import Story from "../Story/Story";
import ErrorHandler from "../ErrorHandler";

interface NewsData {
  id: number;
}

const News = () => {
  const LIMIT = 50;
  const API = `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${LIMIT}"&endAt="80"`;

  const { error, loading, data } = useApiRequest<NewsData>(API);

  const stories = useMemo(
    () => (data ? (Object.values(data) as Array<number>) : []),
    [data]
  );

  if (error) {
    return <ErrorHandler message={error?.message} />;
  }

  if (loading) {
    return <div> Loading... </div>;
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 } as SxProps}>
      <Grid item sx={{ width: "100%" } as SxProps}>
        {stories.map((item: number) => {
          return <Story key={item} item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default News;
