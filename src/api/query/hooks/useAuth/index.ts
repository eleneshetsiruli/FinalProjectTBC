import { User } from "@supabase/supabase-js";
import { useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<{ user: User }>(["user"]);
  const isAuthenticated = !!user;
  return { user, isAuthenticated };
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  const logout = () => {
    queryClient.removeQueries({ queryKey: ["user"] });

    console.log("User logged out.");
  };

  return logout;
};
