import { Pagination } from "@mui/material";
import { ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  pages: number;
  currentPage: number;
  onPageChange?: (newPage: number) => void;
}

const PaginationItem = ({ pages, currentPage, onPageChange }: Props) => {
  const navigate = useNavigate();

  const changePage = useCallback(
    (event: ChangeEvent<unknown>, newPage: number) => {
      if (onPageChange) {
        onPageChange(newPage);
      }

      navigate(`../?page=${newPage}`);
    },
    [navigate, onPageChange]
  );

  return (
    <div className="main">
      <Pagination
        count={pages}
        page={currentPage ? Number(currentPage) : 1}
        onChange={changePage}
        color="primary"
        size="large"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "black",
            "&:hover, &.Mui-focusVisible": {
              background: "lightgrey",
            },
          },
          "& .MuiButtonBase-root.Mui-selected": {
            color: "white",
          },
          "& .MuiPaginationItem-ellipsis": {
            "&:hover, &.Mui-focusVisible": {
              background: "transparent",
              cursor: "default",
            },
          },
        }}
      />
    </div>
  );
};

export default PaginationItem;
