import { ExperienceCompany } from "@/api/types/experience";
import { CompanyLogo } from "./company-logo";

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
      {company.positions.map((position, index) => (
        <>
          <div className="flex flex-col items-center">
            <div className="flex items-center size-4 rounded-full bg-primary shrink-0"></div>
            {index < company.positions.length - 1 && (
              <div className="h-full w-1 bg-primary my-0.5"></div>
            )}
          </div>
          <div
            key={position.id}
            className="col-start-2 mb-10 flex flex-col gap-2"
          >
            <h3 className="font-bold text-xl leading-none">{position.title}</h3>
            <p className="text-base text-black/70">{position.period}</p>
            <div className="flex gap-4">
              {position.skills.map((skill, index) => (
                <div
                  key={skill + index}
                  className="text-white bg-grey font-extrabold text-base leading-none tracking-wider rounded px-4 py-2"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            <p>{position.description}</p>
          </div>
        </>
      ))}
    </div>
  );
};
