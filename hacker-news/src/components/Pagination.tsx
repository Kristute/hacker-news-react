import { Pagination } from "@mui/material";

import usePagination from "../hooks/usePagination/usePagination";

const PaginationItem = () => {
  const { currentPage, totalPages, handlePageClick } = usePagination();

  return (
    <div className="main">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageClick}
      />
      {/* <Pagination 
                  count={pages.length} 
                  page={currentPage} 
                  onChange={handlePageClick} 
                /> */}
    </div>
  );
};

export default PaginationItem;
