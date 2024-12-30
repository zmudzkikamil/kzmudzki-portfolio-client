import { api } from "../api";
import { ExperienceCompany } from "../types/experience";

export const getExperience = async (): Promise<ExperienceCompany[]> => {
  return api.get("/experience");
};
