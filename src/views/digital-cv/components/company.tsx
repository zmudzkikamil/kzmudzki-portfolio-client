import { motion } from "motion/react";
import { ExperienceCompany } from "@/api/types/experience";
import { CompanyLogo } from "./company-logo";
import { Position } from "./position";
import { slugify } from "@/utils/slugify";
import { useAnimationReady } from "@/utils/useAnimationReady";

interface Props {
  company: ExperienceCompany;
}

export const Company: React.FC<Props> = ({ company }) => {
  const ready = useAnimationReady();

  return (
    <motion.div
      id={slugify(company.company)}
      className="grid grid-cols-[auto,1fr] gap-x-4 md:gap-x-8 text-base sm:text-xl scroll-mt-28"
      initial={{ opacity: 0, y: 20 }}
      whileInView={ready ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CompanyLogo companyName={company.company} />
      <div className="mb-6 sm:mb-10">
        <h2 className="font-bold text-xl sm:text-3xl leading-none">
          {company.company}
        </h2>
        <p className="text-black/70 mt-2 sm:mt-3">{company.period}</p>
      </div>
      {company.positions.toReversed().map((position, index) => (
        <Position
          key={position.id}
          position={position}
          index={index}
          positionsLength={company.positions.length}
        />
      ))}
    </motion.div>
  );
};
