import { useTranslation } from "react-i18next";
import { HotelCardProps } from "./types";

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onDelete }) => {
  const { t, i18n } = useTranslation();
  const name = i18n.language === "ka" ? hotel.name_ka : hotel.name_en;
  const description =
    i18n.language === "ka" ? hotel.description_ka : hotel.description_en;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src={hotel.image}
        alt={hotel.name_en}
      />
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <button className="bg-transparent border-card text-blue-500">
            {hotel.price}€
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => onDelete(hotel.id)}
          >
            {t("pay-page.delete")}
          </button>
        </div>
      </div>
    </div>
  );
};
