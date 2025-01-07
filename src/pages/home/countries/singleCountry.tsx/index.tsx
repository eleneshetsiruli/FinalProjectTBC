import { ParagrCva } from "@/components/ui/cva/paragraph";
import { CountryImg } from "../countryImg";
import { SingleCountryProps } from "../types";
import { Link } from "react-router-dom";
import { Loading } from "@/pages/isLoading";

export const SingleCountry: React.FC<SingleCountryProps> = ({ country }) => {
  if (!country) {
    return <Loading />;
  }
  return (
    <Link to={`/${country.id}`}>
      <div className="pl-10 pr-10 mt-10 mb-10" key={country.id}>
        <ParagrCva size="lg" color="secondary">
          {country.name}
        </ParagrCva>
        <CountryImg src={country.image} />
        <ParagrCva color="green">
          <span className="text-gray-600">Price:</span> {country.price}$
          <span className="text-gray-600">-Per day</span>
        </ParagrCva>
      </div>
    </Link>
  );
};
