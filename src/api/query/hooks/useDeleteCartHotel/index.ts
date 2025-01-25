import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCartHotel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (hotelId: string) => {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const updatedCart = savedCart.filter((id: string) => id !== hotelId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cartHotels"], (oldData: any) => {
        if (!oldData) return [];
        return oldData.filter((hotel: any) => updatedCart.includes(hotel.id));
      });
    },
  });
};
