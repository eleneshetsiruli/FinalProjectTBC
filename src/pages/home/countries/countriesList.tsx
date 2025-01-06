import { useCountries } from "@/api/query/hooks/useCountries";
import { Loading } from "../../isLoading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider/countriesList.css";
import { SimpleSlider } from "./slider/simpleSlider";

export const CountriesList = () => {
  const page = 1;
  const limit = 6;

  const { data, isLoading } = useCountries(page, limit);
  if (isLoading) return <Loading />;
  const countries = data?.countries || [];

  if (!Array.isArray(countries)) {
    return <div>Data is not in expected format.</div>;
  }

  return <SimpleSlider countries={countries} />;
};
