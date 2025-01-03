import { Knowledge } from "@/api/types/knowledge";
import { Badge } from "@/shared/components/badge/badge";
import { CircularProgress } from "./circular-progress";

interface Props {
  knowledgeItem: Knowledge;
}

export const KnowledgeItem: React.FC<Props> = ({ knowledgeItem }) => {
  return (
    <div className="flex flex-col flex-1 items-center gap-16 h-[41rem] min-w-[20rem] p-3.5 pt-20 bg-secondary-dark rounded-2xl">
      <h3 className="text-4xl font-bold capitalize">
        {knowledgeItem.category}
      </h3>
      <CircularProgress percentage={parseInt(knowledgeItem.level, 10)} />
      <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
        {knowledgeItem.skills.map((skill, index) => (
          <Badge key={`${skill} ${index}`} variant="primary" label={skill} />
        ))}
      </div>
    </div>
  );
};
