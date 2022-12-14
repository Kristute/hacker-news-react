import {
  Grid,
} from "@mui/material";

import useApiRequest from '../../hooks/useApiRequest/useApiRequest';
import Story from "../Story/Story";
import ErrorHandler from "../ErrorHandler";

const News = () => {
  const LIMIT = 50;
  const API = `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${LIMIT}"&endAt="80"`;

  const { error, isLoaded, data } = useApiRequest(API)
  const stories = Object.values(data)

  if (error) {
    return (
      <ErrorHandler message={error.message} />
    );
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item sx={{ width: "100%" }}>
          
          {stories.map((item: string) => {
            return <Story key={item} item={item} />;
          })}

        </Grid>
      </Grid>
    );
  }
};

export default News;
