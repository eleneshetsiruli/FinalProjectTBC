import React from "react";
import { PaginationProps } from "../types";
import { useTranslation } from "react-i18next";

const Pagination: React.FC<PaginationProps> = ({
  page,
  onNext,
  onPrevious,
  isNextDisabled,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className={`px-4 py-2 rounded-md text-white ${
          page === 1 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {t("blog-page.prev")}
      </button>
      <span className="text-popover-foreground font-medium">
        {t("blog-page.page")} {page}
      </span>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`px-4 py-2 rounded-md text-white ${
          isNextDisabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {t("blog-page.next")}
      </button>
    </div>
  );
};

export default Pagination;
