import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";

interface paginationAttributes {
  pages: number;
  stories: [];
  currentPage: number;
}

const usePagination = (API: string, newsPerPage: number) => {
  const location = useLocation();
  // data - to count total pages
  const { data, error, loading } = useApiRequest<[]>(API);
  const params = new URLSearchParams(location.search);
  const currentPage = Number(params.get("page")) || 1;
  const [[startIndex, endIndex], setIndexes] = useState<number[]>([
    currentPage * newsPerPage - newsPerPage,
    currentPage * newsPerPage - 1,
  ]);
  // stories - to get paginated data
  const [stories, setData] = useState([]);

  const [totalPages, setTotalPages] = useState<number>(1);

  const getTotalPages = useCallback(() => {
    if (data !== undefined) {
      setTotalPages(
        Math.round(Object.entries(data as number[]).length / newsPerPage)
      );
    }
  }, [data, newsPerPage]);

  // TODO: move this logic from usePagination
  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${startIndex}"&endAt="${endIndex}"`
    )
      .then((res) => res.json())
      .then((retrievedData) => setData(retrievedData));
  }, [startIndex, endIndex]);

  useEffect(() => {
    if (!loading) getTotalPages();
  }, [loading, getTotalPages]);

  useEffect(() => {
    setIndexes([
      currentPage * newsPerPage - newsPerPage,
      currentPage * newsPerPage - 1,
    ]);
  }, [currentPage, newsPerPage]);

  const paginationAttributes = {
    pages: totalPages,
    stories: stories,
    currentPage: currentPage,
  } as paginationAttributes;

  return {
    error,
    loading,
    paginationAttributes,
  };
};

export default usePagination;
