import { useMutation } from "@tanstack/react-query";
import { MutationKeys } from "../enums/mutationKeys";
import { signUpUser } from "../../responce/signUp";

export const useSignUp = () => {
  return useMutation({
    mutationKey: [MutationKeys.SIGNUP],
    mutationFn: signUpUser,
    onSuccess: (data) => {
      console.log("User signed up successfully:", data.user);
    },
    onError: (error) => {
      console.error("Error signing up:", error.message);
    },
  });
};
