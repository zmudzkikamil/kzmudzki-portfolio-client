import { useQuery } from "@tanstack/react-query";
import { AboutMeStep } from "../types/about-me";
import { getAboutMe } from "../services/about-me";

export const useGetAboutMeQuery = () => {
  return useQuery<AboutMeStep[], Error>({
    queryKey: ["about-me"],
    queryFn: getAboutMe,
  });
};
