import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "../services/projects";
import { Project } from "../types/projects";

export const useGetProjectsQuery = () => {
  return useQuery<Partial<Project>[], Error>({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });
};

export const useGetProjectQuery = (id: string) => {
  return useQuery<Project, Error>({
    queryKey: ["projects", id],
    queryFn: () => getProject(id),
  });
};
