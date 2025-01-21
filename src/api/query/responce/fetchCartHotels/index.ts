import supabase from "@/lib/supabase";

export const fetchCartHotels = async (cart: string[]) => {
  if (cart.length === 0) return [];

  const { data, error } = await supabase
    .from("hotels")
    .select("*")
    .in("id", cart);

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};
