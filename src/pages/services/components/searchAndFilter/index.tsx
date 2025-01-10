import { SearchAndFilterProps } from "../../types";
import { PriceRange } from "../priceSort";
import { PriceRangeSlider } from "../rangeSlider";
import Search from "../Search";

export const SearchAndFilter = ({
  onSearchChange,
  onPriceRangeChange,
  onSortChange,
}: SearchAndFilterProps) => {
  return (
    <div className="flex mx-40 lg:flex-row items-center lg:gap-60 mt-10 flex-col">
      <Search onSearchChange={onSearchChange} />
      <PriceRangeSlider min={0} max={3000} onChange={onPriceRangeChange} />
      <PriceRange onSortChange={onSortChange} />
    </div>
  );
};
//
