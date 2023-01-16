import { Pagination } from "@mui/material";
import { ChangeEvent } from "react";

interface paginationAttributes {
    currentPage: number;
    maxPageLimit: number;
    minPageLimit: number;
    response: number[];
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageChange: (number: number) => void;
}
  

const PaginationItem = (props: paginationAttributes) => {
    const { currentPage} = props;
    const statTotalPages = 50;
    const totalPages = statTotalPages-1;
  
    
      const pages = [];
      for(let i=1 ; i<=totalPages; i++){
          pages.push(i);
      }

      const handlePageClick = (event: ChangeEvent<unknown>, value: number) => {
            props.onPageChange(Number(value))      
          };
  
      return (
          <div className="main">              
              <Pagination 
                  count={pages.length} 
                  page={currentPage} 
                  onChange={handlePageClick} 
                />
          </div>
      )
  }
  
  export default PaginationItem;
