import React from "react";
import { ParagrCva } from "@/components/ui/cva/paragraph";
import { StarRating } from "./starRating";
import { HotelCardProps } from "../types";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import PayButton from "@/components/payButton";
import { useNavigate } from "react-router-dom";
import { pageEnums } from "@/pages/enums/pageEnums";
import { useDeleteCartHotel } from "@/api/query/hooks/useDeleteCartHotel";

const HotelCard: React.FC<HotelCardProps> = ({ hotel, isCartPage }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { mutate: deleteHotel } = useDeleteCartHotel();

  const name =
    i18n.language === "en" ? hotel.name_en || hotel.name_ka : hotel.name_ka;
  const description =
    i18n.language === "en"
      ? hotel.description_en || hotel.description_ka
      : hotel.description_ka;

  const handleAddToCart = (id: string) => {
    navigate(pageEnums.PAY);
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!existingCart.includes(id)) {
      const updatedCart = [...existingCart, id];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Hotel Image */}
      <img
        className="w-full h-48 object-cover"
        src={hotel.image}
        alt={hotel.name_en || "Hotel"}
      />

      {/* Hotel Details */}
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <ParagrCva size="wid200" color="secondary">
          {description}
        </ParagrCva>
        <StarRating rating={hotel.rating} />

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Button className="bg-transparent border-card text-blue-500">
            {hotel.price}€
          </Button>
          {isCartPage ? (
            <Button
              onClick={() => deleteHotel(hotel.id)}
              className="bg-red-500 text-white"
            >
              {t("pay-page.delete")}
            </Button>
          ) : (
            <PayButton id={hotel.id} onPay={() => handleAddToCart(hotel.id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
