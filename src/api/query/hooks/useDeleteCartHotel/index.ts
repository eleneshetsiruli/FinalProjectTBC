// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useDeleteCartHotel = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (hotelId: string) => {
//       // Get saved cart from local storage
//       const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

//       // Remove the hotel ID from the cart
//       const updatedCart = savedCart.filter((id: string) => id !== hotelId);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));

//       return hotelId; // Return deleted hotel ID for cache updates
//     },
//     onSuccess: (deletedHotelId) => {
//       // Optimistically update the cache
//       queryClient.setQueryData(["cartHotels"], (oldData: any[] | undefined) => {
//         if (!oldData) return [];
//         return oldData.filter((hotel) => hotel.id !== deletedHotelId);
//       });

//       // Optionally refetch the data to ensure consistency
//       queryClient.invalidateQueries({ queryKey: ["cartHotels"] });
//     },
//   });
// };

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCartHotel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (hotelId: string) => {
      // Get the cart from local storage
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Remove the hotel ID from the cart
      const updatedCart = savedCart.filter((id: string) => id !== hotelId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    },
    onSuccess: (updatedCart) => {
      // Directly update the cache for "cartHotels"
      queryClient.setQueryData(["cartHotels"], (oldData: any) => {
        if (!oldData) return [];
        return oldData.filter((hotel: any) => updatedCart.includes(hotel.id));
      });
    },
  });
};
