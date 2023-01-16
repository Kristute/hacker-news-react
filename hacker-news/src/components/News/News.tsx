import { useMemo, useState } from "react";
import { Grid } from "@mui/material";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";
import PaginationItem from "../Pagination";
import Story from "../Story/Story";
import ErrorHandler from "../ErrorHandler";

interface NewsData {
  id: number;
}

const News = () => {
  const pageNumberLimit = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPageLimit, setMaxPageLimit] = useState<number>(5);
  const [minPageLimit, setMinPageLimit] = useState<number>(0);
    
  const onPageChange= (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  const onPrevClick = () => {
    if((currentPage-1) % pageNumberLimit === 0){
        setMaxPageLimit(maxPageLimit - pageNumberLimit);
        setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage(prev=> prev-1);
   }

  const onNextClick = () => {
      if(currentPage+1 > maxPageLimit){
          setMaxPageLimit(maxPageLimit + pageNumberLimit);
          setMinPageLimit(minPageLimit + pageNumberLimit);
      }
      setCurrentPage(prev=>prev+1);
    }

  const API = `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${currentPage}"&endAt="80"`;

  const { error, loading, data } = useApiRequest<NewsData>(API);

  const stories = useMemo(
    () => (data ? (Object.values(data) as Array<number>) : []),
    [data]
  );


  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    response: stories,
  };

  if (error) {
    return <ErrorHandler message={error?.message} />;
  }

  if (loading) {
    return <div> Loading... </div>;
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <PaginationItem {...paginationAttributes} 
                  onPrevClick={onPrevClick} 
                  onNextClick={onNextClick}
                  onPageChange={onPageChange}
      />
      <Grid item sx={{ width: "100%" }}>
        {stories.map((item: number) => {
          return <Story key={item} item={item} />;
        })}
      </Grid>
    </Grid>
  );
};

export default News;
