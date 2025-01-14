export interface StarRatingProps {
  rating: string;
}

export interface Hotel {
  id: string;
  name_en: string;
  description_en: string;
  image: string;
  rating: string;
  country_en: string;
  price: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PaginationProps {
  page: number;
  onNext: () => void;
  onPrevious: () => void;
  isNextDisabled: boolean;
}
export interface HotelCardProps {
  hotel: {
    id: string;
    name_en: string;
    description_en: string;
    image: string;
    rating: string;
    price: string;
    name_ka: string;
    description_ka: string;
  };
}

export interface HotelListProps {
  hotels: {
    id: string;
    name_en: string;
    description_en: string;
    description_ka: string;
    image: string;
    rating: string;
    price: string;
    name_ka: string;
  }[];
}
