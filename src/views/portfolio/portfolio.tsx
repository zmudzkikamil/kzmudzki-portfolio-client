import {
  categoryOrientedProjectsOptions,
  getProjectQueryOptions,
  projectsQueryOptions,
  useGetCategoryOrientedProjectsQuery,
  useGetProjectsQuery,
} from "@/api/queries/projects";
import { ViewLayout } from "@/layout/view-layout";
import {
  Header,
  HeaderSubtitle,
  HeaderTitle,
} from "@/shared/components/header";
import { MainContent } from "@/shared/components/main-content";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { ProjectsCategory } from "./components/projects-category";

interface Props {}

export const clientLoader = (queryClient: QueryClient) => async () => {
  const query = categoryOrientedProjectsOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const Portfolio: React.FC<Props> = () => {
  const { data, isLoading } = useGetCategoryOrientedProjectsQuery();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!data) return;
    const prefetch = () => {
      data
        .flatMap(({ projects }) => projects)
        .forEach((project) => {
          queryClient.prefetchQuery(getProjectQueryOptions(project.id));
        });
    };
    if ("requestIdleCallback" in window) {
      requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 1);
    }
  }, [data, queryClient]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ViewLayout mode="primary">
      <Header className="pt-28 space-y-4">
        <HeaderTitle>Portfolio</HeaderTitle>
        <HeaderSubtitle text="Turning complex requirements into clean, usable frontend experiences." />
      </Header>
      <MainContent className="my-16">
        <div className="flex flex-col gap-40">
          {data.map((category) => (
            <ProjectsCategory
              key={category.category}
              projects={category.projects}
              category={category.category}
            />
          ))}
        </div>
      </MainContent>
    </ViewLayout>
  );
};

export default Portfolio;
