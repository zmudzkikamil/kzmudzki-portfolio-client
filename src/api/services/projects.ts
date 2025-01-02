import { api } from "../api";
import { DetailedProject, Project } from "../types/projects";

export const getProjects = async (): Promise<Project[]> => {
  return api.get("/projects");
};
export const getProject = async (id: string): Promise<DetailedProject> => {
  return api.get(`/projects/${id}`);
};
