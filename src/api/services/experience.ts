import { api } from "../api";
import { Experience } from "../types/experience";

export const getExperience = async (): Promise<Experience[]> => {
  return api.get("/experience");
};
