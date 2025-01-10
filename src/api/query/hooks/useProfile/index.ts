import { Profile } from "@/pages/profileInfo/types";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../../responce/fetchProfile";
import { MutationKeys } from "../enums/mutationKeys";

export const useProfile = () => {
  return useQuery<Profile | null, Error>({
    queryKey: [MutationKeys.PROFILE],
    queryFn: fetchProfile,
  });
};
