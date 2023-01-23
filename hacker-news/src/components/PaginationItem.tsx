import { Pagination } from "@mui/material";
import { ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  pages: number;
  stories: [];
  currentPage: number;
  newsPerPage: number;
}

const PaginationItem = ({
  pages,
  currentPage,
}: Props) => {
  const navigate = useNavigate();

  console.log('p', pages)

  const changePage = useCallback(
    (event: ChangeEvent<unknown>) => {
      const pageNumber = (event.target as HTMLElement).textContent;
      navigate(`../?page="${pageNumber}"`);
    },
    [navigate]
  );

  return (
    <div className="main">
      <Pagination
        count={pages}
        page={currentPage ? Number(currentPage) : 1}
        onChange={changePage}
      />
    </div>
  );
};

export default PaginationItem;
