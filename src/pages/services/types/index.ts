export interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onPageChange: (page: number) => void;
}
export interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange: (range: [number, number]) => void;
}

export interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onSortChange: (sortOrder: string) => void;
}
export interface CountryListProps {
  isLoading: boolean;
  isFetching: boolean;
  countries: Array<{
    id: string;
    name: string;
    price: number;
    image: string;
    description_ka: string;
    description_en: string;
    name_ka: string;
  }>;
}
