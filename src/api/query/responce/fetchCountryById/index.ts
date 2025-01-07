import supabase from "@/lib/supabase";

export const fetchCountryById = async (id: string) => {
  const { data, error } = await supabase
    .from("countries")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
