import { queryOptions, useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "../services/projects";
import { DetailedProject } from "../types/projects";
import { projectCategories } from "@/shared/consts/project-categories";

export const projectsQueryOptions = () => {
  return queryOptions({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });
};

export const getProjectQueryOptions = (id: string) => {
  return queryOptions({
    queryKey: ["projects", id],
    queryFn: () => getProject(id),
  });
};

export const categoryOrientedProjectsOptions = () => {
  return queryOptions({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
    select: (data) =>
      projectCategories.map((category) => {
        return {
          category,
          projects: data.filter((project) => project.category === category),
        };
      }),
  });
};

export const useGetProjectsQuery = () => {
  return useQuery(projectsQueryOptions());
};

export const useGetProjectQuery = (id: string) => {
  return useQuery<DetailedProject, Error>(getProjectQueryOptions(id));
};

export const useGetCategoryOrientedProjectsQuery = () => {
  return useQuery(categoryOrientedProjectsOptions());
};
