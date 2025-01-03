import supabase from "@/lib/supabase";
import { LoginFormData } from "@/pages/login/interfaces";

export const signInWithEmailPassword = async (
  data: LoginFormData
): Promise<string> => {
  const { email, password } = data;
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return "Login successful";
};
