import { useQuery } from "@tanstack/react-query";
import { fetchCartHotels } from "@/api/query/responce/fetchCartHotels";

export const useCartHotels = (savedCart: string[]) => {
  return useQuery({
    queryKey: ["cartHotels", savedCart],
    queryFn: () => fetchCartHotels(savedCart),
    enabled: savedCart.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};
