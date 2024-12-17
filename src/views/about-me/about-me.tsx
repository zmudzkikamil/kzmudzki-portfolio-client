import { ViewLayout } from "@/layout/view-layout";
import { Header } from "@/shared/components/header";

interface Props {}

const AboutMe: React.FC<Props> = () => {
  return (
    <ViewLayout mode="secondary">
      <Header title="abc" />
      about me
    </ViewLayout>
  );
};

export default AboutMe;
