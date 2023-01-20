import { ChangeEvent, useCallback, useEffect, useState } from "react";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";

// interface paginationAttributes {
//   response?: number[];
// }
interface NewsData {
  id: number;
}

interface AllNewsData {
  length: [];
}

const usePagination = () => {
  // how many pages are shown in Pagination, others - in dots
  const pageNumberLimit = 5;
  const newsPerPage = 10;
  const [pageItems, setpageItems] = useState<number>(1);
  const totalPages = pageItems - 1;
  const allStoriesApi = 'https://hacker-news.firebaseio.com/v0/newstories.json';
  const { data: total} = useApiRequest<AllNewsData>(allStoriesApi);  
  const firstAPI = `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="1"&endAt="10"`;
  const [API, setAPI] = useState<string>(firstAPI);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPageLimit, setMaxPageLimit] = useState<number>(5);
  const [minPageLimit, setMinPageLimit] = useState<number>(0);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPages = useCallback(() => {
  if (total) {
    setpageItems(Number(total?.length) / newsPerPage);
  }

  }, [total]);

  useEffect(() => {
    getPages();
  }, [getPages]);


  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageClick = (event: ChangeEvent<unknown>, value: number) => {
    // 10 items per page
    const start = value === 1 ? 1 : (value - 1) * 11;
    const end = value === 1 ? value + 9 : value * 11 - 1;

    requestAPI(start, end);
    onPageChange(Number(value));
  };

  const requestAPI = (startPage: number, endPage: number) => {
    const request = `https://hacker-news.firebaseio.com/v0/newstories.json?&orderBy="$key"&startAt="${startPage}"&endAt="${endPage}"`;
    setAPI(request);
  };

  console.log('send', API)
  const { data, error, loading } = useApiRequest<NewsData>(API);

  // const paginationAttributes = {
  //   response: data,
  // } as paginationAttributes;

  return {
    currentPage,
    onPageChange,
    onPrevClick,
    onNextClick,
    handlePageClick,
    totalPages,
    data,
    error,
    loading,
    // paginationAttributes
  };
};

export default usePagination;
