import Slider from "react-slick";
import { SimpleSliderProps } from "../../types";
import { settings } from "./sliderSettings";
import { SingleCountry } from "../singleCountry.tsx";
import { useTranslation } from "react-i18next";

export const SimpleSlider = ({ countries }: SimpleSliderProps) => {
  const { t } = useTranslation();
  return (
    <div className="mt-[100px] flex flex-col gap-2 text-orange-600 ">
      <div className="ml-10">
        <h1 className="text-xl">{t("home-page.popular")}</h1>
      </div>
      <Slider {...settings}>
        {countries.map((country) => (
          <SingleCountry key={country.id} country={country} />
        ))}
      </Slider>
    </div>
  );
};
