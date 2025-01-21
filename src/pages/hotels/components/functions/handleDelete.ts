export const handleDeleteFromCart = (id: string, refetch: () => void) => {
  // Update localStorage with the removed item
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = existingCart.filter((hotelId: string) => hotelId !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // Trigger refetch to update the cart hotels data
  refetch();
};
