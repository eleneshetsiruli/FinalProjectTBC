import supabase from "@/lib/supabase";

export const fetchBlogs = async () => {
  const { data, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.error("Error fetching blogs:", error.message);
    throw new Error(error.message);
  }

  return data;
};
