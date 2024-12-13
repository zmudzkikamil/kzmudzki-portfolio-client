import { ViewLayout } from "@/layout/view-layout";
import {
  Header,
  HeaderTitle,
  HeaderSubtitle,
} from "@/shared/components/header";

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <ViewLayout mode="secondary">
      <Header>
        {/* Tailwind arbitrary values used here because of specific shape of header. */}
        <div className="absolute left-1/2 -translate-x-1/2 scale-105 w-full h-full max-h-[399px] max-w-[1947px] bg-[url('src/assets/header.svg')] bg-cover bg-center"></div>
        <HeaderTitle>
          Hello,
          <br /> I'm Kamil Żmudzki
        </HeaderTitle>
        <HeaderSubtitle text="Software Engineer, Frontend Developer, AWS certified associate" />
      </Header>
      about me
    </ViewLayout>
  );
};

export default AboutMe;
