import Slider from "react-slick";
import { SimpleSliderProps } from "../../types";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { settings } from "./sliderSettings";
import { SingleCountry } from "../singleCountry.tsx";

export const SimpleSlider = ({ countries }: SimpleSliderProps) => {
  return (
    <div className="mt-[100px] flex flex-col gap-10 ">
      <div className="ml-10">
        <ParagrCva color="secondary" size="xl">
          Popular Tour Offers
        </ParagrCva>
      </div>
      <Slider {...settings}>
        {countries.map((country) => (
          <SingleCountry key={country.id} country={country} />
        ))}
      </Slider>
    </div>
  );
};
