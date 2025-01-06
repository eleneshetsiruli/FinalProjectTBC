import { useQuery } from "@tanstack/react-query";
import { MutationKeys } from "@/api/query/hooks/enums/mutationKeys";
import { fetchCountries } from "@/api/query/responce/fetchCountries";

export const useCountries = (page: number, limit: number) => {
  return useQuery({
    queryKey: [MutationKeys.COUNTRIES, page, limit],
    queryFn: () => fetchCountries(page, limit),
    staleTime: 5000,
  });
};
