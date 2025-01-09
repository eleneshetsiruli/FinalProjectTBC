import { SingleCountry } from "@/pages/home/countries/singleCountry.tsx";
import { RenderSkeletons } from "../components/skeleton";
import { CountryListProps } from "../types";

export const CountryList = ({
  isLoading,
  isFetching,
  countries,
}: CountryListProps) => {
  if (isLoading || isFetching) {
    return <RenderSkeletons />;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {countries.map((country) => (
        <SingleCountry key={country.id} country={country} />
      ))}
    </div>
  );
};
