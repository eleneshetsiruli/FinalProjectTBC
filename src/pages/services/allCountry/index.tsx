import { useCountries } from "@/api/query/hooks/useCountries";
import { usePagination } from "@/api/query/hooks/usePagination";
import { SingleCountry } from "@/pages/home/countries/singleCountry.tsx";
import PaginationControls from "../pagination";

export const AllCountry = () => {
  const limit = 6;
  const { data, isLoading, isFetching } = useCountries(1, limit);
  const { page, totalPages, handleNext, handlePrevious, goToPage } =
    usePagination(data?.total || 0, limit);

  const { data: paginatedData } = useCountries(page, limit);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {isLoading || isFetching ? (
          <p>Loading...</p>
        ) : (
          paginatedData?.countries?.map((country) => (
            <SingleCountry key={country.id} country={country} />
          ))
        )}
      </div>
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
