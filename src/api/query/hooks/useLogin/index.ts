import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationKeys } from "../enums/mutationKeys";
import { signInWithEmailPassword } from "../../responce/login";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MutationKeys.LOGIN],
    mutationFn: signInWithEmailPassword,
    onSuccess: (user) => {
      console.log("Login successful");
      localStorage.setItem("user", JSON.stringify(user));
      queryClient.setQueryData(["user"], user);
    },
    onError: (error: Error) => {
      console.error("Error logging in:", error.message);
    },
  });
};
