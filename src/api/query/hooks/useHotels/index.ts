import { useQuery } from "@tanstack/react-query";
import { MutationKeys } from "../enums/mutationKeys";
import { fetchHotels } from "../../responce/fetchHotels";

export const useHotels = (page: number, limit: number, country: string) => {
  return useQuery({
    queryKey: [MutationKeys.HOTELS, page, limit, country],
    queryFn: () => fetchHotels(page, limit, country),
    staleTime: 5000,
  });
};
