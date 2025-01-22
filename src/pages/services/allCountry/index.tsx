import { useCountries } from "@/api/query/hooks/useCountries";
import { useState, useCallback } from "react";
import { SearchAndFilter } from "../components/searchAndFilter";
import { CountryList } from "../components/countryListProps";
import { useTranslation } from "react-i18next";

export const AllCountry = () => {
  const { data, isLoading, isFetching } = useCountries();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortOrder, setSortOrder] = useState<string>("low-to-high");
  const { i18n } = useTranslation();
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleSortChange = useCallback((sortOrder: string) => {
    setSortOrder(sortOrder);
  }, []);

  const filteredCountries = data?.countries
    ?.filter((country) => {
      const currentLanguage = i18n.language;

      const countryName =
        currentLanguage === "ka" ? country.name_ka : country.name;

      return (
        countryName?.toLowerCase().includes(searchTerm.toLowerCase()) &&
        country.price >= priceRange[0] &&
        country.price <= priceRange[1]
      );
    })
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
    </>
  );
};
