import { ViewLayout } from "@/layout/view-layout";
import { CvHeader } from "./components/cv-header";
import { MainContent } from "@/shared/components/main-content";
import { Title } from "@/shared/components/title";
import {
  getExperienceOptions,
  useGetExperienceQuery,
} from "@/api/queries/experience";
import { QueryClient } from "@tanstack/react-query";
import { Company } from "./components/company";
import {
  getKnowledgeOptions,
  useGetKnowledgeQuery,
} from "@/api/queries/knowledge";
import { Section } from "@/shared/components/section";
import { KnowledgeItem } from "./components/knowledge-item";
import { getCertsOptions, useGetCertsQuery } from "@/api/queries/certs";

interface Props {}

export const clientLoader = (queryClient: QueryClient) => async () => {
  const experienceQuery = getExperienceOptions();
  const knowledgeQuery = getKnowledgeOptions();
  const certsQuery = getCertsOptions();

  const experienceData =
    queryClient.getQueryData(experienceQuery.queryKey) ??
    (await queryClient.fetchQuery(experienceQuery));

  const knowledgeData =
    queryClient.getQueryData(knowledgeQuery.queryKey) ??
    (await queryClient.fetchQuery(knowledgeQuery));

  const certsData =
    queryClient.getQueryData(certsQuery.queryKey) ??
    (await queryClient.fetchQuery(certsQuery));

  return { experienceData, knowledgeData, certsData };
};

const DigitalCv: React.FC<Props> = () => {
  const { data: experience, isLoading: experienceIsLoading } =
    useGetExperienceQuery();
  const { data: knowledge, isLoading: knowledgeIsLoading } =
    useGetKnowledgeQuery();
  const { data: certs, isLoading: certsIsLoading } = useGetCertsQuery();

  if (experienceIsLoading || knowledgeIsLoading || certsIsLoading)
    return <div>Loading...</div>;
  if (!experience || !knowledge || !certs) return null;

  return (
    <ViewLayout mode="secondary">
      <CvHeader />
      <MainContent>
        <Section id="experience">
          <Title title="Experience" />
          {experience.map((company) => (
            <Company key={company.id} company={company} />
          ))}
        </Section>
        <Section id="skills">
          <Title title="Skills" />
          <div className="flex flex-wrap gap-4 lg:gap-9 justify-center">
            {knowledge.map((item) => (
              <KnowledgeItem key={item.id} knowledgeItem={item} />
            ))}
          </div>
        </Section>
      </MainContent>
    </ViewLayout>
  );
};

export default DigitalCv;
