import { useCountries } from "@/api/query/hooks/useCountries";
import { usePagination } from "@/hooks/usePagination";
import { useState, useCallback } from "react";
import PaginationControls from "../pagination";
import { SearchAndFilter } from "../components/searchAndFilter";
import { CountryList } from "../components/countryListProps";

export const AllCountry = () => {
  const limit = 6;
  const { data, isLoading, isFetching } = useCountries(1, limit);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortOrder, setSortOrder] = useState<string>("low-to-high"); // Add state to track sorting order
  const { page, totalPages, handleNext, handlePrevious, goToPage } =
    usePagination(data?.total || 0, limit);

  const { data: paginatedData } = useCountries(page, limit);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleSortChange = useCallback((sortOrder: string) => {
    setSortOrder(sortOrder);
  }, []);

  const filteredCountries = paginatedData?.countries
    ?.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        country.price >= priceRange[0] &&
        country.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortOrder === "low-to-high") {
        return a.price - b.price;
      } else if (sortOrder === "high-to-low") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <>
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceRangeChange}
        onSortChange={handleSortChange}
      />

      <CountryList
        isLoading={isLoading}
        isFetching={isFetching}
        countries={filteredCountries || []}
      />

      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onPageChange={goToPage}
      />
    </>
  );
};
