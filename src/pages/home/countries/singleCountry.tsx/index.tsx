import { ParagrCva } from "@/components/ui/cva/paragraph";
import { CountryImg } from "../countryImg";
import { SingleCountryProps } from "../types";
import { Link } from "react-router-dom";
import { Loading } from "@/pages/isLoading";
import { useTranslation } from "react-i18next";

export const SingleCountry: React.FC<SingleCountryProps> = ({ country }) => {
  const { i18n, t } = useTranslation();
  const countryTitle = i18n.language === "ka" ? country.name_ka : country.name;
  if (!country) {
    return <Loading />;
  }
  return (
    <Link to={`/${country.id}`}>
      <div className="pl-10 pr-10 mt-10 mb-10" key={country.id}>
        <ParagrCva size="lg" color="primary">
          {countryTitle}
        </ParagrCva>
        <CountryImg src={country.image} />
        <ParagrCva color="green">
          <span className="text-popover-foreground">
            {t("home-page.price")}
          </span>
          {country.price}€<span className="text-gray-600"></span>
        </ParagrCva>
      </div>
    </Link>
  );
};
