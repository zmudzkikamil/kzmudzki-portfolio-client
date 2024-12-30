import { useQuery } from "@tanstack/react-query";
import { ExperienceCompany } from "../types/experience";
import { getExperience } from "../services/experience";

export const getExperienceOptions = () => ({
  queryKey: ["experience"],
  queryFn: getExperience,
});

export const useGetExperienceQuery = () => {
  return useQuery<ExperienceCompany[], Error>(getExperienceOptions());
};
