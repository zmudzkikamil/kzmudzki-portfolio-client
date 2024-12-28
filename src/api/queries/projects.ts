import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "../services/projects";
import { Project } from "../types/projects";

export const projectsQueryOptions = () => ({
  queryKey: ["projects"],
  queryFn: () => getProjects(),
});

export const projectQueryOptions = (id: string) => ({
  queryKey: ["projects", id],
  queryFn: () => getProject(id),
});

export const useGetProjectsQuery = () => {
  return useQuery<Partial<Project>[], Error>(projectsQueryOptions());
};

export const useGetProjectQuery = (id: string) => {
  return useQuery<Project, Error>(projectQueryOptions(id));
};
