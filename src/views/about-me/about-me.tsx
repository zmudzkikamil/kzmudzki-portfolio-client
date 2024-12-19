import { ViewLayout } from "@/layout/view-layout";
import Button from "@/shared/components/form/button";
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
          <span className="block leading-snug tracking-wide">Hello,</span>
          <span className="block tracking-wide">I'm Kamil Żmudzki</span>
        </HeaderTitle>
        <HeaderSubtitle text="Software Engineer, Frontend Developer, AWS certified associate" />
        <div className="flex gap-4">
          <Button label="Contact me" onClick={() => {}} />
          <Button label="Contact me" onClick={() => {}} />
        </div>
      </Header>
      about me
    </ViewLayout>
  );
};

export default AboutMe;
