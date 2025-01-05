import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../responce/fetchBlogs";
import { MutationKeys } from "../enums/mutationKeys";

export const useFetchBlogs = () => {
  return useQuery({
    queryKey: [MutationKeys.BLOGS],
    queryFn: fetchBlogs,
    refetchOnWindowFocus: true,
  });
};
