import { ExperienceCompany } from "@/api/types/experience";
import { CompanyLogo } from "./company-logo";
import { Position } from "./position";

interface Props {
  company: ExperienceCompany;
}

export const Company: React.FC<Props> = ({ company }) => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-x-10 text-base sm:text-xl">
      <CompanyLogo companyName={company.company} />
      <div className="mb-10">
        <h2 className="font-bold text-3xl leading-none">{company.company}</h2>
        <p className="text-black/70 mt-3">{company.period}</p>
      </div>
      {company.positions.toReversed().map((position, index) => (
        <Position
          key={position.id}
          position={position}
          index={index}
          positionsLength={company.positions.length}
        />
      ))}
    </div>
  );
};
