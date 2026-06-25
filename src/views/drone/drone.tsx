import { ViewLayout } from "@/layout/view-layout";
import { MainContent } from "@/shared/components/main-content";
import { DroneHero } from "./components/drone-hero";
import { ServicesSection } from "./components/services-section";
import { DroneGallery } from "./components/drone-gallery";
import { DroneAbout } from "./components/drone-about";

const Drone: React.FC = () => {
  return (
    <ViewLayout mode="primary">
      <DroneHero />
      <MainContent>
        <ServicesSection />
        <DroneGallery />
        <DroneAbout />
      </MainContent>
    </ViewLayout>
  );
};

export default Drone;
