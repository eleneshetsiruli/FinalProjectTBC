import supabase from "@/lib/supabase";
import { LoginFormData } from "@/pages/login/interfaces";

export const signInWithEmailPassword = async (
  data: LoginFormData
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
    // localStorage.setItem("access_token", user.session.access_token);
    // localStorage.setItem("refresh_token", user.session.refresh_token); // Store the refresh token as well
    localStorage.setItem("user", JSON.stringify(user.user));

    return {
      access_token: user.session.access_token,
      user: user.user,
    };
  }

  throw new Error("User session not found.");
};
