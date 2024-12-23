import { useQuery } from "@tanstack/react-query";
import { Experience } from "../types/experience";
import { getExperience } from "../services/experience";

export const useGetExperienceQuery = () => {
  return useQuery<Experience[], Error>({
    queryKey: ["experience"],
    queryFn: () => getExperience(),
  });
};
