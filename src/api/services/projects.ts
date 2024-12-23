import { api } from "../api";
import { Project } from "../types/projects";

export const getProjects = async (): Promise<Partial<Project>[]> => {
  return api.get("/projects");
};
export const getProject = async (id: string): Promise<Project> => {
  return api.get(`/projects/${id}`);
};
