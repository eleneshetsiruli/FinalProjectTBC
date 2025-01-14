export interface Country {
  id: string;
  name: string;
  image: string;
  price: number;
  name_ka: string;
  description_ka: string;
  description_en: string;
}

export interface SingleCountryProps {
  country: Country;
}
