import { useMutation } from "@tanstack/react-query";
import supabase from "@/lib/supabase";
import { LoginFormData } from "@/pages/login/interfaces";
import { MutationKeys } from "../enums/mutationKeys";

const signInWithEmailPassword = async (
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

export const useLogin = () => {
  return useMutation({
    mutationKey: [MutationKeys.LOGIN],
    mutationFn: signInWithEmailPassword,
    onSuccess: () => {
      console.log("Login successful");
    },
    onError: (error: Error) => {
      console.error("Error logging in:", error.message);
    },
  });
};
