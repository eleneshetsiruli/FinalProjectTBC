export interface Country {
  id: string;
  name: string;
  image: string;
  price: number;
  name_ka: string;
}

export interface SingleCountryProps {
  country: Country;
}
