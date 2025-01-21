import { HotelListProps } from "../types";
import HotelCard from "./hotelCard";

const HotelList: React.FC<HotelListProps> = ({ hotels, isCartPage }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels?.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} isCartPage={isCartPage} />
      ))}
    </div>
  );
};

export default HotelList;
