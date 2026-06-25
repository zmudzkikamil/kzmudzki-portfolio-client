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
import { motion } from "motion/react";
import { useAnimationReady } from "@/utils/useAnimationReady";

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
  const ready = useAnimationReady();

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
        <motion.div
          className="flex items-center justify-between gap-6 pt-6 border-t border-secondary-dark"
          initial={{ opacity: 0, y: 16 }}
          whileInView={ready ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-file-lines text-primary text-2xl shrink-0" />
            <div>
              <p className="text-primary font-bold text-lg leading-tight">
                Ready to see the full picture?
              </p>
              <p className="text-primary/60 text-sm">
                Work history, skills & certifications in one place
              </p>
            </div>
          </div>
          <Link
            to={paths["digital-cv"].getHref()}
            className="text-primary font-semibold text-sm shrink-0 hover:underline underline-offset-2"
          >
            View Digital CV
          </Link>
        </motion.div>
      </MainContent>
    </ViewLayout>
  );
};

export default AboutMe;
