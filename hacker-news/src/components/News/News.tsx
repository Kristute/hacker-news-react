// import { useMemo } from "react";
import { Grid } from "@mui/material";

// import { useState } from "react";

import usePagination from "../../hooks/usePagination/usePagination";
import PaginationItem from "../Pagination";
import Story from "../Story/Story";
import ErrorHandler from "../ErrorHandler";

const News = () => {
  const { data, error, loading } = usePagination();
  console.log('data', data)
  //setStories(Object.values(data) as Array<number>) : null
  const stories = (data ? (Object.values(data) as Array<number>) : [])
  // const stories = useMemo(
  //   () => (data ? (Object.values(data) as Array<number>) : []),
  //   [data]
  // );



  // const paginationAttributes = {
  //     currentPage,
  //     response: stories,
  //   };

  if (error) {
    return <ErrorHandler message={error?.message} />;
  }

  if (loading) {
    return <div> Loading... </div>;
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {/* <PaginationItem {...stories} /> */}
      <PaginationItem />
      {/* <PaginationItem {...paginationAttributes} 
                  onPrevClick={onPrevClick} 
                  onNextClick={onNextClick}
                  onPageChange={onPageChange}
      /> */}
      <Grid item sx={{ width: "100%" }}>
        {stories.map((item: number) => {
          return <Story key={item} item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default News;
