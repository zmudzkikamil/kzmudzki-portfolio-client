import { Project } from "@/api/types/projects";
import { paths } from "@/config/paths";
import { Link } from "react-router";

interface Props {
  project: Project;
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <Link
      className="w-80 h-80 relative sm:w-[22.5rem] sm:h-[22.5rem]"
      to={paths.project.getHref(project.id)}
    >
      <div className="w-[17rem] h-[17rem] sm:w-[19rem] sm:h-[19rem] bg-primary-lighter px-4 py-3 sm:py-3.5 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold">{project.image}</h3>
        <div className="absolute bottom-0 right-0 w-[17rem] h-[17rem] sm:w-[19rem] sm:h-[19rem] bg-white rounded-lg" />
      </div>
    </Link>
  );
};
