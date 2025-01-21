import { useState } from "react";
import { Loading } from "../isLoading";
import { CartHeader } from "./cartHeader";
import { HotelCard } from "./hotelCart";
import { useCartHotels } from "@/api/query/hooks/useCartHotels/useCartHotels";
import { useDeleteCartHotel } from "@/api/query/hooks/useDeleteCartHotel";
import { useTranslation } from "react-i18next";

const Cart: React.FC = () => {
  const [savedCart, setSavedCart] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("cart") || "[]"),
  );
  const { data: cartHotels, isLoading, isError } = useCartHotels(savedCart);
  const { mutate: deleteHotel } = useDeleteCartHotel();
  const { t } = useTranslation();

  const handleDelete = (hotelId: string) => {
    deleteHotel(hotelId, {
      onSuccess: () => {
        const updatedCart = savedCart.filter((id) => id !== hotelId);
        setSavedCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      },
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>{t("pay-page.error")}</p>;

  return (
    <div className="lg:mx-20">
      <CartHeader />
      {cartHotels && cartHotels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p>{t("pay-page.no-booked")}</p>
      )}
    </div>
  );
};

export default Cart;
