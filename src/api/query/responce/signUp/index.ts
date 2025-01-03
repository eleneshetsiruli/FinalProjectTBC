import supabase from "@/lib/supabase";
import { SignUpFormInputs } from "@/pages/signUp/interfaces";
import { Session, User } from "@supabase/supabase-js";

export const signUpUser = async (
  data: SignUpFormInputs
): Promise<{ user: User | null; session: Session | null }> => {
  const { email, password } = data;
  const { data: userData, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return userData;
};
