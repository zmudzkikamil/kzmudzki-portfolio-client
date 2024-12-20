import { ViewLayout } from "@/layout/view-layout";
import { AboutMeHeader } from "./components/about-me-header";
import { MainContent } from "@/shared/components/main-content";
import { Title } from "@/shared/components/title";

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <ViewLayout mode="secondary">
      <AboutMeHeader />
      <MainContent>
        <Title title="About me" />
        <p className="text-lg">
          I am a software engineer with a passion for web development. I have
          experience working with JavaScript, TypeScript, React, and Node.js. I
          am always looking to learn new technologies and improve my skills.
        </p>
      </MainContent>
    </ViewLayout>
  );
};

export default AboutMe;
