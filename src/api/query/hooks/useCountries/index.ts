import { useQuery } from "@tanstack/react-query";
import { MutationKeys } from "@/api/query/hooks/enums/mutationKeys";
import { fetchCountries } from "@/api/query/responce/fetchCountries";

export const useCountries = () => {
  return useQuery({
    queryKey: [MutationKeys.COUNTRIES],
    queryFn: fetchCountries,
  });
};
