import { useState } from "react";

export const usePagination = (total: number, limit: number) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(total / limit);

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const goToPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return {
    page,
    totalPages,
    handleNext,
    handlePrevious,
    goToPage,
  };
};
