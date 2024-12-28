import { useQuery } from "@tanstack/react-query";
import { Experience } from "../types/experience";
import { getExperience } from "../services/experience";

export const getExperienceOptions = () => ({
  queryKey: ["experience"],
  queryFn: getExperience,
});

export const useGetExperienceQuery = () => {
  return useQuery<Experience[], Error>(getExperienceOptions());
};
