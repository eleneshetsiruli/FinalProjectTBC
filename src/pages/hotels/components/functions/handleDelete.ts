export const handleDeleteFromCart = (id: string, refetch: () => void) => {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = existingCart.filter((hotelId: string) => hotelId !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  refetch();
};
