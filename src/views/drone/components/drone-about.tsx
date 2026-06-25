import { Section } from "@/shared/components/section";
import { Title } from "@/shared/components/title";

const equipment = [
  { icon: "fa-solid fa-camera", label: "DJI — [model & camera specs]" },
  {
    icon: "fa-solid fa-certificate",
    label: "Licensed UAV operator — [license type / number]",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Operating in [your region / area]",
  },
];

export const DroneAbout: React.FC = () => {
  return (
    <Section id="about">
      <Title title="About & Equipment" />
      <div className="flex flex-col gap-8 text-secondary">
        <p className="lg:text-xl text-lg font-light leading-relaxed max-w-2xl">
          Based in [your location], I offer professional aerial photography and
          videography using high-end drone equipment. Every flight is planned
          meticulously to capture the best angles and deliver results that make
          your project stand out.
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
