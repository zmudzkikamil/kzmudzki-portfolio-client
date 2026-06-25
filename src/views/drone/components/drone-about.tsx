import { Section } from "@/shared/components/section";
import { Title } from "@/shared/components/title";

const equipment = [
  { icon: "fa-solid fa-camera", label: "DJI — [model i specyfikacja kamery]" },
  {
    icon: "fa-solid fa-certificate",
    label: "Licencjonowany operator BSP — [typ licencji / numer]",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Działam na terenie [Twój region / obszar]",
  },
];

export const DroneAbout: React.FC = () => {
  return (
    <Section id="about">
      <Title title="O mnie i sprzęt" />
      <div className="flex flex-col gap-8 text-secondary">
        <p className="lg:text-xl text-lg font-light leading-relaxed max-w-2xl">
          Działam z [Twoja lokalizacja] i oferuję profesjonalną fotografię oraz
          wideo dronem przy użyciu sprzętu najwyższej klasy. Każdy lot jest
          starannie zaplanowany, aby uchwycić najlepsze ujęcia i dostarczyć
          efekty, które wyróżnią Twój projekt.
        </p>
        <ul className="flex flex-col gap-4">
          {equipment.map(({ icon, label }) => (
            <li key={label} className="flex items-center gap-4 text-grey-light">
              <i className={`${icon} text-cta w-5 text-center`} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
