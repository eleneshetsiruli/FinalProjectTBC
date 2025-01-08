import supabase from "@/lib/supabase";
import { LoginFormData } from "@/pages/login/interfaces";

export const signInWithEmailPassword = async (
  data: LoginFormData,
): Promise<{ access_token: string; user: any }> => {
  const { email, password } = data;
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (user && user.session) {
    return {
      access_token: user.session.access_token,
      user: user.user,
    };
  }

  throw new Error("User session not found.");
};
