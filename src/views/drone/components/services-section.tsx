import { Section } from "@/shared/components/section";
import { Title } from "@/shared/components/title";
import { ServiceCard } from "./service-card";

const services = [
  {
    icon: "fa-solid fa-house",
    title: "Real Estate Photography",
    description:
      "Stunning aerial shots that showcase properties from every angle. Ideal for listings, marketing materials, and architectural documentation.",
  },
  {
    icon: "fa-solid fa-video",
    title: "Real Estate Videography",
    description:
      "Cinematic drone footage that brings properties to life. Smooth flyovers, orbit shots, and reveal sequences tailored for video tours.",
  },
  {
    icon: "fa-solid fa-store",
    title: "Commercial Photography",
    description:
      "Eye-catching aerial content for small businesses, storefronts, and entrepreneurs looking to elevate their brand presence.",
  },
  {
    icon: "fa-solid fa-camera",
    title: "Events & Other",
    description:
      "Unique bird's-eye perspectives for outdoor events, land surveys, progress documentation, and any project that benefits from an aerial viewpoint.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services">
      <Title title="Services" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
};
