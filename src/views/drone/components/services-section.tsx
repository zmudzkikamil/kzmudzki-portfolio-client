import { Section } from "@/shared/components/section";
import { Title } from "@/shared/components/title";
import { ServiceCard } from "./service-card";

const services = [
  {
    icon: "fa-solid fa-house",
    title: "Fotografia Nieruchomości",
    description:
      "Spektakularne ujęcia z powietrza prezentujące nieruchomości z każdej strony. Idealne do ofert, materiałów marketingowych i dokumentacji architektonicznej.",
  },
  {
    icon: "fa-solid fa-video",
    title: "Wideo Nieruchomości",
    description:
      "Filmowe nagrania dronem, które ożywiają nieruchomości. Płynne przeloty, ujęcia orbitalne i sekwencje odkrycia dostosowane do wirtualnych wycieczek.",
  },
  {
    icon: "fa-solid fa-store",
    title: "Fotografia Komercyjna",
    description:
      "Przyciągające wzrok ujęcia z powietrza dla małych firm, lokali i przedsiębiorców chcących wyróżnić swoją markę.",
  },
  {
    icon: "fa-solid fa-camera",
    title: "Wydarzenia i Inne",
    description:
      "Unikalne perspektywy z lotu ptaka dla plenerowych wydarzeń, pomiarów terenu, dokumentacji postępu prac i każdego projektu, który zyska na widoku z powietrza.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services">
      <Title title="Usługi" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
};
