import { ParagrCva } from "@/components/ui/cva/paragraph";
import { StarRating } from "./starRating";
import { HotelCardProps } from "../types";
import { Button } from "@/components/ui/button";

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src={hotel.image}
        alt={hotel.name_en}
      />
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">{hotel.name_en}</h3>
        <ParagrCva size="wid200" color="secondary">
          {hotel.description_en}
        </ParagrCva>
        <StarRating rating={hotel.rating} />
        <div className="flex justify-between">
          <Button className=" bg-transparent border-card text-blue-500">
            {hotel.price}€
          </Button>
          <Button className="bg-blue-500 text-white hover:bg-card">
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
