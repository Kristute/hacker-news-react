// import { useState } from "react";

function usePagination() {
  // function usePagination(data, itemsPerPage) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const maxPage = Math.ceil(data.length / itemsPerPage);

  // function currentData() {
  //   const begin = (currentPage - 1) * itemsPerPage;
  //   const end = begin + itemsPerPage;
  //   return data.slice(begin, end);
  // }

  // function next() {
  //   setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  // }

  // function prev() {
  //   setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  // }

  // TODO: useCallback
  // function jump(page) {
  //   const pageNumber = Math.max(1, page);
  //   setCurrentPage((currentPage) => {
  //     console.log(currentPage); // TODO: check this
  //     Math.min(pageNumber, maxPage);
  //   });
  // }

  // return { next, prev, jump, currentData, currentPage, maxPage };
  return;
}

export default usePagination;