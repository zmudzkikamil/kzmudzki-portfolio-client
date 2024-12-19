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
        <div className="flex flex-col items-center sm:items-start gap-4 lg:gap-6 relative">
          <HeaderTitle>
            <span className="block leading-snug tracking-wide">Hello,</span>
            <span className="block tracking-wide">I'm Kamil Żmudzki</span>
          </HeaderTitle>
          <HeaderSubtitle text="Software Engineer, Frontend Developer, AWS certified associate" />
          <div className="flex gap-4">
            <Button label="Contact me" onClick={() => {}} />
          </div>
          <img
            src="src/assets/user.png"
            alt="user"
            className="absolute hidden sm:block right-0 top-10 md:top-0 max-h-[250px] md:max-h-[320px] lg:max-h-[350px]"
          />
        </div>
      </Header>
      about me
    </ViewLayout>
  );
};

export default AboutMe;
