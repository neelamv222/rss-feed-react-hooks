// eslint-disable-next-line 
import React, { useState } from "react"; 

const usePagination = (data=[], itemsPerPage) => {
   const [currentPage, setCurrentPage] = useState(1);
   const maxPage = Math.ceil(data.length / itemsPerPage);

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function previous() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function goTo(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  function currentPageData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex) || [];
  }

  return { next, previous, goTo, currentPage, maxPage, currentPageData };
 }

 export default usePagination;
 