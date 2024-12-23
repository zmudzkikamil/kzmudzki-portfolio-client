import { api } from "../api";
import { AboutMeStep } from "../types/about-me";

export const getAboutMe = async (): Promise<AboutMeStep[]> => {
  return api.get("/about-me");
};
