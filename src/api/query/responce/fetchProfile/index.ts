import supabase from "@/lib/supabase";
import { Profile } from "@/pages/profileInfo/types";

export const fetchProfile = async (): Promise<Profile> => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) throw authError;

  if (!user) {
    throw new Error("User not authenticated");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) throw profileError;

  if (!profile) {
    throw new Error("Profile data not found");
  }

  return profile;
};
