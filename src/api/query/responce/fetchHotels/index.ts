import supabase from "@/lib/supabase";

export const fetchHotels = async (
  page: number,
  limit: number,
  country: string,
) => {
  const offset = (page - 1) * limit;

  const query = supabase
    .from("hotels")
    .select("*")
    .range(offset, offset + limit - 1);

  if (country) {
    query.eq("country_en", country);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
