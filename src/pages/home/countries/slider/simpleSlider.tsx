import Slider from "react-slick";
import { SimpleSliderProps } from "../../types";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { CountryImg } from "../countryImg";
import { settings } from "./sliderSettings";

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
          <div className="pl-10 pr-10 mt-10 mb-10" key={country.id}>
            <ParagrCva size="lg" color="secondary">
              {country.name}
            </ParagrCva>
            <CountryImg src={country.image} />
            <ParagrCva color="green">
              <span className="text-gray-600">Price:</span> {country.price}$
            </ParagrCva>
          </div>
        ))}
      </Slider>
    </div>
  );
};
