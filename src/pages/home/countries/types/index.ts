export interface Country {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface SingleCountryProps {
  country: Country;
}
