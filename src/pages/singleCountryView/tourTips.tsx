import { useTranslation } from "react-i18next";
import { Country } from "./types";

export const TourTips = ({ country }: { country: Country }) => {
  const { t, i18n } = useTranslation();
  const countryName = i18n.language === "ka" ? country?.name_ka : country?.name;

  const tips = [
    {
      title: t("singleCountry-page.transportation"),
      text: t("singleCountry-page.use"),
      styles: "bg-blue-50 border-l-4 border-blue-500 text-blue-600",
    },
    {
      title: t("singleCountry-page.parking"),
      text: t("singleCountry-page.comportable"),
      styles: "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-600",
    },
    {
      title: t("singleCountry-page.budget"),
      text: `${country?.price}€ ${t("singleCountry-page.plan")}`,
      styles: "bg-green-50 border-l-4 border-green-500 text-green-600",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {countryName} {t("singleCountry-page.days")}
      </h1>
      {tips.map((tip, index) => (
        <div key={index} className={`p-4 mb-6 rounded-md ${tip.styles}`}>
          <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
          <p className="text-gray-700">{tip.text}</p>
        </div>
      ))}
    </div>
  );
};
