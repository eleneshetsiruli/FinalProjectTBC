import { useCartHotels } from "@/api/query/hooks/useCartHotels/useCartHotels";
import HotelList from "../hotels/components/hotelList";
import { Loading } from "../isLoading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart: React.FC = () => {
  const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

  const { data: cartHotels, isLoading, isError } = useCartHotels(savedCart);

  return (
    <div className="cart">
      <div className="flex justify-center items-center gap-8 ">
        <h2 className="text-popover-foreground text-center lg:text-4xl my-4">
          Your Booked Hotels
        </h2>
        <FontAwesomeIcon
          className="w-8 h-8 text-orange-500 lg:w-10 lg:h-10"
          icon={faCartShopping}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>Error fetching hotels. Please try again later.</p>
      ) : cartHotels && cartHotels.length > 0 ? (
        <HotelList hotels={cartHotels} isCartPage={true} />
      ) : (
        <p>No hotels booked yet.</p>
      )}
    </div>
  );
};

export default Cart;
