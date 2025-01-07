import { useQuery } from "@tanstack/react-query";
import { fetchCountryById } from "../../responce/fetchCountryById";
import { MutationKeys } from "../enums/mutationKeys";

const useFetchCountry = (id: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [MutationKeys.SINGLECOUNTRY, id],
    queryFn: () => fetchCountryById(id),
    enabled: !!id,
  });

  return { country: data, loading: isLoading, error: error?.message };
};

export default useFetchCountry;
