import { useHotels } from "@/api/query/hooks/useHotels";
import { ComboboxDemo } from "../flights/options/combobox";
import { countryList } from "../flights/staticData";
import HotelList from "./components/hotelList";
import Pagination from "./components/pagination";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const HotelsView = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const countryFromUrl = searchParams.get("country") || "";

  const [page, setPage] = useState(pageFromUrl);
  const [selectedCountry, setSelectedCountry] =
    useState<string>(countryFromUrl);

  const limit = 3;

  const {
    data: hotels,
    error,
    isLoading,
  } = useHotels(page, limit, selectedCountry);

  const handleNext = () => {
    if ((hotels?.length || 0) === limit) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setPage(1);
  };

  useEffect(() => {
    const params: Record<string, string> = { page: page.toString() };
    if (selectedCountry) {
      params.country = selectedCountry;
    }
    setSearchParams(params);
  }, [page, selectedCountry, setSearchParams]);

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <div className="p-6 space-y-6">
      <ComboboxDemo
        select="Find hotel by Country"
        list={countryList}
        value={selectedCountry}
        onChange={handleCountryChange}
      />
      <HotelList hotels={hotels || []} />
      <Pagination
        page={page}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isNextDisabled={page >= 4}
      />
    </div>
  );
};
