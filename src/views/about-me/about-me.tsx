import { ViewLayout } from "@/layout/view-layout";
import { AboutMeHeader } from "./components/about-me-header";
import { MainContent } from "@/shared/components/main-content";
import { Title } from "@/shared/components/title";
import { QueryClient } from "@tanstack/react-query";
import { getAboutMeOptions, useGetAboutMeQuery } from "@/api/queries/about-me";
import { AboutMeItem } from "./components/about-me-item";
import { Icon } from "@/shared/components/icon";

interface Props {}

export const clientLoader = (queryClient: QueryClient) => async () => {
  const query = getAboutMeOptions();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const AboutMe: React.FC<Props> = () => {
  const { data, isLoading } = useGetAboutMeQuery();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ViewLayout mode="secondary">
      <AboutMeHeader />
      <MainContent>
        <Title title="About me" />
        <div className="grid grid-cols-[auto,1fr] sm:grid-cols-[auto,auto,1fr] gap-x-6 text-base sm:text-xl">
          {data.map((item) => (
            <AboutMeItem key={item.id} item={item} />
          ))}
          <div className=" sm:col-start-2">
            <Icon variant="primary" />
          </div>
          <h2 className="sm:col-start-3 font-bold pt-10 leading-none">
            Code the future of your company with me!
          </h2>
        </div>
      </MainContent>
    </ViewLayout>
  );
};

export default AboutMe;
