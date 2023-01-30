import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";

interface paginationAttributes {
  pages: number;
  stories: [];
  currentPage: number;
}

const usePagination = (URL: string, newsPerPage: number) => {
  const location = useLocation();
  // data - to count total pages
  const { data, error, loading } = useApiRequest<number[]>(URL);
  const params = new URLSearchParams(location.search);
  const currentPage = Number(params.get("page")) || 1;
  // stories - to get paginated data
  const [stories, setStories] = useState<number[]>([]);

  const totalPages = useMemo(() => {
    if (!loading && data !== undefined) {
      return Math.round(Object.entries(data as number[]).length / newsPerPage);
    }
  }, [loading, data, newsPerPage]);

  const [startIndex, endIndex] = useMemo(() => {
    return [
      currentPage * newsPerPage - newsPerPage,
      currentPage * newsPerPage - 1,
    ];
  }, [currentPage, newsPerPage]);

  // TODO: move this logic from usePagination
  useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${startIndex}"&endAt="${endIndex}"`
    )
      .then((res) => res.json())
      .then((retrievedData) => setStories(retrievedData));
  }, [startIndex, endIndex]);

  const paginationAttributes = useMemo(
    () =>
      ({
        pages: totalPages,
        stories: stories,
        currentPage: currentPage,
      } as paginationAttributes),
    [totalPages, stories, currentPage]
  );

  return {
    error,
    loading,
    paginationAttributes,
  };
};

export default usePagination;
