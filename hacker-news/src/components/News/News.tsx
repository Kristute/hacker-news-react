import { Grid } from "@mui/material";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";
import Story from "../Story/Story";
import ErrorHandler from "../ErrorHandler";

interface Error {
  message: string;
}

const News = () => {
  const LIMIT = 50;
  const API = `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${LIMIT}"&endAt="80"`;
  let stories;

  const {
    error,
    loading,
    data,
  }: { error: Error | undefined; loading: boolean; data: [] | undefined } =
    useApiRequest(API);
  data ? (stories = Object.values(data) as []) : null;

  if (error) {
    return <ErrorHandler message={error?.message} />;
  }

  if (loading) {
    return <div> Loading... </div>;
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid item sx={{ width: "100%" }}>
        {stories
          ? stories.map((item: string) => {
              return <Story key={item} item={item} />;
            })
          : null}
      </Grid>
    </Grid>
  );
};

export default News;
