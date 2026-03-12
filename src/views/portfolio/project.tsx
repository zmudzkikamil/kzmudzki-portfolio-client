import { useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjectQueryOptions } from "@/api/queries/projects";
import { ViewLayout } from "@/layout/view-layout";
import { Header } from "@/shared/components/header/header";
import { HeaderTitle } from "@/shared/components/header";
import { MainContent } from "@/shared/components/main-content";
import { Badge } from "@/shared/components/badge/badge";
import EmblaCarousel from "./components/EmblaCarousel";

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
      <Header className="pt-28 pb-8 md:pb-16">
        <HeaderTitle text={data.title} />
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-4 mt-8">
          {data.skills.map((skill, index) => (
            <Badge label={skill} variant="secondary" key={skill + index} />
          ))}
        </div>
      </Header>
      <MainContent>
        {data.views.length === 1 || data.views.length === 2 ? (
          <div className="relative flex justify-center items-center h-full">
            <h2 className=" absolute -top-[70px] left-0 right-0 text-center text-secondary text-3xl lg:text-4xl font-bold">
              {data.views[0].title}
            </h2>
            <img
              src={data.views[0].image}
              alt={data.views[0].title}
              className="aspect-[4/3] max-h-[500px] object-cover rounded-3xl"
            />
          </div>
        ) : (
          <EmblaCarousel slides={data.views} options={{ loop: true }} />
        )}
        <div className="flex flex-col gap-8 md:gap-12">
          {data.details && data.details.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4 md:mb-6">
                Details of web-app
              </h2>
              <ul className="list-disc list-outside space-y-2 ms-6">
                {data.details.map((detail, index) => (
                  <li key={index} className="text-lg text-secondary/90">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.technologies && data.technologies.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4 md:mb-6">
                Technologies
              </h2>
              <ul className="list-disc list-outside space-y-2 ms-6">
                {data.technologies.map((tech, index) => (
                  <li key={index} className="text-lg text-secondary/90">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.improvements && data.improvements.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4 md:mb-6">
                List of potential improvements
              </h2>
              <ul className="list-disc list-outside space-y-2 ms-6">
                {data.improvements.map((improvement, index) => (
                  <li key={index} className="text-lg text-secondary/90">
                    {improvement.description
                      ? improvement.description
                      : improvement.improvement}
                    {improvement.descriptionDetails &&
                      improvement.descriptionDetails.length > 0 && (
                        <ul className="list-[circle] list-outside ms-6">
                          {improvement.descriptionDetails &&
                            improvement.descriptionDetails.map(
                              (detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                              ),
                            )}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </MainContent>
    </ViewLayout>
  );
}
