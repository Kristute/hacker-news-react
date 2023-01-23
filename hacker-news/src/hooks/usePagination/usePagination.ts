import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useApiRequest from "../../hooks/useApiRequest/useApiRequest";

interface paginationAttributes {
  pages: number,
  stories: [],
  currentPage: number
}

const usePagination = (API: string, newsPerPage: number) => {
  const { data, error, loading } = useApiRequest<[]>(API);
  const [stories, setStories] = useState<[]>()
  const [pages, setPages] = useState<number>(1)
  const { page: currentPage }  = useParams<string>(); // from react-router, this is the `:page` parameter defined on the route. 

  const getStories = useCallback(() => {
    if (data) {
      setStories(data)
      setPages(Math.round(data.length / newsPerPage))
    }
  
    }, [data, newsPerPage]);

    const getPaginatedData = useCallback(() => {
      const startIndex = Number(currentPage) * newsPerPage - newsPerPage
      const endIndex = startIndex + newsPerPage
      if (stories) {
        const slicedStories = stories.slice(startIndex, endIndex);
        return setStories(slicedStories as [])
      }
    }, [currentPage, newsPerPage, stories])

    useEffect(() => {
      getStories();
    }, [getStories]);


  const paginationAttributes = {
    pages: pages,
    stories: stories,
    currentPage: Number(currentPage) | 1
  } as paginationAttributes;

    return {
      stories, error, loading, currentPage, paginationAttributes, getPaginatedData
    }
};

export default usePagination;
