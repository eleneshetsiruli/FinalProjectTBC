import supabase from "@/lib/supabase";

export const fetchCountries = async () => {
  const { data, error } = await supabase.from("countries").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
