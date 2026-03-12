import {
  categoryOrientedProjectsOptions,
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
import { QueryClient } from "@tanstack/react-query";
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

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ViewLayout mode="primary">
      <Header className="pt-28 space-y-4">
        <HeaderTitle text="Portfolio" />
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
