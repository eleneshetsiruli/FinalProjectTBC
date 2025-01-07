import useFetchCountry from "@/api/query/hooks/useSingleCountry";
import { useParams } from "react-router-dom";
import { SingleCountry } from "../home/countries/singleCountry.tsx";

export const SingleCountryView = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Country ID is missing</div>;
  }
  const { country } = useFetchCountry(id);

  return (
    <div className="flex justify-center">
      <SingleCountry country={country} />
    </div>
  );
};
