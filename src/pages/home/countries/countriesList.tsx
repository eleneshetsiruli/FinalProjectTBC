import { useCountries } from "@/api/query/hooks/useCountries";
import { Loading } from "../../isLoading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider/countriesList.css";
import { SimpleSlider } from "./slider/simpleSlider";

export const CountriesList = () => {
  const { data: countries, isLoading } = useCountries();

  if (isLoading) return <Loading />;

  return <SimpleSlider countries={countries || []} />;
};
