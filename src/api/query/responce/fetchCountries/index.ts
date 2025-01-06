import supabase from "@/lib/supabase";

export const fetchCountries = async (page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const { data, error, count } = await supabase
    .from("countries")
    .select("*", { count: "exact" })
    .range(start, end);

  if (error) {
    throw new Error(error.message);
  }

  return { countries: data, total: count };
};
