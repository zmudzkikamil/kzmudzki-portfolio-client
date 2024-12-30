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

interface Props {}

export const clientLoader = (queryClient: QueryClient) => async () => {
  const query = getExperienceOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const DigitalCv: React.FC<Props> = () => {
  const { data, isLoading } = useGetExperienceQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ViewLayout mode="secondary">
      <CvHeader />
      <MainContent>
        <Title title="Experience" />
        {data.map((company) => (
          <Company key={company.id} company={company} />
        ))}
      </MainContent>
    </ViewLayout>
  );
};

export default DigitalCv;
