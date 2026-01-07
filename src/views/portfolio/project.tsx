import { QueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjectQueryOptions } from "@/api/queries/projects";
import { ViewLayout } from "@/layout/view-layout";
import { Header } from "@/shared/components/header/header";
import { HeaderTitle } from "@/shared/components/header";
import { MainContent } from "@/shared/components/main-content";
import { Badge } from "@/shared/components/badge/badge";

export function clientLoader(queryClient: QueryClient) {
  return async function loader({ params }: { params: { projectId?: string } }) {
    const projectId = params.projectId;

    if (!projectId) {
      throw new Response("Project ID missing", { status: 400 });
    }

    const query = getProjectQueryOptions(projectId);

    const cached = queryClient.getQueryData(query.queryKey);
    if (cached) {
      return cached;
    }

    return await queryClient.fetchQuery(query);
  };
}

export default function Project() {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId) return null;

  const { data } = useQuery(getProjectQueryOptions(projectId));

  if (!data) return null;

  return (
    <ViewLayout mode="primary">
      <Header className="pt-28">
        <HeaderTitle>{data.title}</HeaderTitle>
        <div className="flex flex-wrap gap-2 md:gap-4 mt-8">
          {data.skills.map((skill, index) => (
            <Badge label={skill} variant="secondary" key={skill + index} />
          ))}
        </div>
      </Header>
      <MainContent>
        <div className="flex flex-col gap-40">
          <h1 className="text-4xl font-bold">{data.id}</h1>
        </div>
      </MainContent>
    </ViewLayout>
  );
}
