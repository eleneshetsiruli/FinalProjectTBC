export interface CountryImgProps {
  src: string;
}

export interface SimpleSliderProps {
  countries: {
    id: string;
    name: string;
    price: number;
    image: string;
    name_ka: string;
    description_ka: string;
    description_en: string;
  }[];
}
