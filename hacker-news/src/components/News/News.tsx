import { Grid } from "@mui/material";
import PaginationItem from "../PaginationItem";
import Story from "../Story/Story";
import ErrorHandler from "../ErrorHandler";
import usePagination from "../../hooks/usePagination/usePagination";

const News = () => {
  const newsPerPage = 10;
  const API = "https://hacker-news.firebaseio.com/v0/newstories.json";
  const { stories, error, loading, paginationAttributes } = usePagination(
    API,
    newsPerPage
  );  
  
  if (error) {
    return <ErrorHandler message={error?.message} />;
  }

  if (loading) {
    return <div> Loading... </div>;
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <PaginationItem {...paginationAttributes} newsPerPage={newsPerPage} />
      <Grid item sx={{ width: "100%" }}>
        {Object.values(stories as object).map((item: number) => {
          return <Story key={item} item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default News;
