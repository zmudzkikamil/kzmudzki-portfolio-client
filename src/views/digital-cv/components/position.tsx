import { ExperiencePosition } from "@/api/types/experience";
import { Badge } from "@/shared/components/badge/badge";

interface Props {
  position: ExperiencePosition;
  positionsLength: number;
  index: number;
}

export const Position: React.FC<Props> = ({
  position,
  index,
  positionsLength,
}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {positionsLength > 1 && (
          <>
            <div className="flex items-center size-4 rounded-full bg-primary shrink-0"></div>
            {index < positionsLength - 1 && (
              <div className="h-full w-1 bg-primary my-0.5"></div>
            )}
          </>
        )}
      </div>
      <div key={position.id} className="col-start-2 mb-10 flex flex-col gap-3">
        <h3 className="font-bold text-xl leading-none">{position.title}</h3>
        <p className="text-base text-black/70">{position.period}</p>
        <div className="flex flex-wrap gap-4">
          {position.skills.map((skill, index) => (
            <Badge key={index} label={skill} variant="grey" />
          ))}
        </div>
        <p>{position.description}</p>
      </div>
    </>
  );
};
