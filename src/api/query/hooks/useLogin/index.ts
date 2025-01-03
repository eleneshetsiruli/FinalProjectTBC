import { useMutation } from "@tanstack/react-query";
import { MutationKeys } from "../enums/mutationKeys";
import { signInWithEmailPassword } from "../../responce/login";

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
