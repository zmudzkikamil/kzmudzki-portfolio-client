import { AboutMeStep } from "@/api/types/about-me";
import { Icon } from "@/shared/components/icon";

interface Props {
  item: AboutMeStep;
}

export const AboutMeItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      <p className="hidden sm:block font-bold pt-10 leading-none sm:leading-none">
        {item.year}
      </p>
      <div className="flex flex-col items-center">
        <Icon iconClassName={item.icon} variant="primary" />
        <div className="h-full w-2 bg-primary"></div>
      </div>
      <div className="flex flex-col self-start gap-3 sm:gap-5">
        <h2 className="font-bold pt-10 leading-none">{item.title}</h2>
        <p className="pb-12 sm:pb-14">{item.description}</p>
      </div>
    </>
  );
};
