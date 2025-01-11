import supabase from "@/lib/supabase";
import { addBlogType } from "./type";

export const addBlogMutation = async (blogData: addBlogType) => {
  const { data, error } = await supabase.from("blogs").insert([blogData]);

  if (error) throw new Error(error.message);
  return data;
};
