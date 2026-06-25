import { ViewLayout } from "@/layout/view-layout";
import { AboutMeHeader } from "./components/about-me-header";
import { MainContent } from "@/shared/components/main-content";
import { Title } from "@/shared/components/title";
import { QueryClient } from "@tanstack/react-query";
import { getAboutMeOptions, useGetAboutMeQuery } from "@/api/queries/about-me";
import { AboutMeItem } from "./components/about-me-item";
import { Icon } from "@/shared/components/icon";
import { Link } from "react-router";
import { paths } from "@/config/paths";

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
        <div className="grid grid-cols-[auto,1fr] sm:grid-cols-[auto,auto,1fr] gap-x-4 md:gap-x-8 xl:gap-x-10 text-base sm:text-xl">
          {data.map((item, index) => (
            <AboutMeItem key={item.id} item={item} index={index} />
          ))}
          <div className=" sm:col-start-2">
            <Icon variant="primary" size="small" />
          </div>
          <h2 className="sm:col-start-3 font-bold pt-8 sm:pt-10 leading-none">
            Code the future of your company with me!
          </h2>
        </div>
        <Link
          to={paths.drone.getHref()}
          className="flex items-center gap-4 bg-secondary-medium rounded-2xl p-5 sm:p-6 group transition-colors hover:bg-secondary-dark"
        >
          <i className="fa-solid fa-camera text-primary text-2xl shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 flex-1">
            <div>
              <p className="text-primary font-bold text-lg leading-tight">
                Aerial Photography & Videography
              </p>
              <p className="text-primary/60 text-sm">
                Real estate, commercial, events
              </p>
            </div>
            <span className="text-primary font-semibold text-sm shrink-0 group-hover:underline underline-offset-2">
              View services →
            </span>
          </div>
        </Link>
      </MainContent>
    </ViewLayout>
  );
};

export default AboutMe;
