import React from "react";
import { PaginationProps } from "../types";

const Pagination: React.FC<PaginationProps> = ({
  page,
  onNext,
  onPrevious,
  isNextDisabled,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className={`px-4 py-2 rounded-md text-white ${
          page === 1 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Previous
      </button>
      <span className="text-gray-700 font-medium">Page {page}</span>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`px-4 py-2 rounded-md text-white ${
          isNextDisabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
