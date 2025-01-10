import supabase from "@/lib/supabase";

export const fetchCountries = async () => {
  const { data, error, count } = await supabase
    .from("countries")
    .select("*", { count: "exact" });

  if (error) {
    throw new Error(error.message);
  }

  return { countries: data, total: count };
};
