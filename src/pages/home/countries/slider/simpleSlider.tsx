import Slider from "react-slick";
import { SimpleSliderProps } from "../../types";

import { settings } from "./sliderSettings";
import { SingleCountry } from "../singleCountry.tsx";

export const SimpleSlider = ({ countries }: SimpleSliderProps) => {
  return (
    <div className="mt-[100px] flex flex-col gap-2 text-orange-600 ">
      <div className="ml-10">
        <h1 className="text-xl">Popular Tour Offers</h1>
      </div>
      <Slider {...settings}>
        {countries.map((country) => (
          <SingleCountry key={country.id} country={country} />
        ))}
      </Slider>
    </div>
  );
};
