import { useQuery } from "@tanstack/react-query";
import { AboutMeStep } from "../types/about-me";
import { getAboutMe } from "../services/about-me";

export const getAboutMeOptions = () => ({
  queryKey: ["about-me"],
  queryFn: getAboutMe,
});

export const useGetAboutMeQuery = () => {
  return useQuery<AboutMeStep[], Error>(getAboutMeOptions());
};
