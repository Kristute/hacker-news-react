import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";

interface paginationAttributes {
  pages: number,
  stories: [],
  currentPage: number
}

const usePagination = (API: string, newsPerPage: number) => {
  // const { data, error, loading } = useApiRequest<[]>(API);
  const [data, setData] = useState<string>(API);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(startIndex + newsPerPage);
  const [pages, setPages] = useState<number>(1)
  const { page: currentPage }  = useParams<string>(); // from react-router, this is the `:page` parameter defined on the route. 
  // const req = `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${startIndex}"&endAt="${endIndex}"`;
  const {data: stories, error, loading} = useApiRequest<[]>(data)
  // const [stories, setStories] = useState<[]>(data as []);

    const getStories = useCallback(() => {
      console.log('data', data)
      // TODO: here data should come from API to have full data entries and calculate pages
      // Later, data should change to sliced data, when I pass setData API with start and end indexes,
      // I can't call useApiRequest inside useCallback, that's why it's needed some other solution
      if (data !== undefined) {
        // setStories(data)
        setPages(Math.round(Object.entries(data as string).length / newsPerPage))
      } 
      }, [data, newsPerPage]);

      const getPaginatedData = useCallback(() => {
        setStartIndex(Number(currentPage) * newsPerPage - newsPerPage);
        setEndIndex(startIndex + newsPerPage)
        setData(`https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${startIndex}"&endAt="${endIndex}"`);
      }, [currentPage, newsPerPage, startIndex, endIndex])

    useEffect(() => {
      getStories();
      getPaginatedData();
    }, [getStories, getPaginatedData]);


  const paginationAttributes = {
    pages: pages,
    stories: stories,
    currentPage: Number(currentPage) | 1
  } as paginationAttributes;

    return {
      stories, error, loading, currentPage, paginationAttributes
    }
};

export default usePagination;
