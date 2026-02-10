import { Project } from "@/api/types/projects";
import { paths } from "@/config/paths";
import { Link } from "react-router";

interface Props {
  project: Project;
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <Link
      className="w-80 h-80 relative sm:w-[22.5rem] sm:h-[22.5rem] group transition-opacity duration-300 rounded-lg"
      to={paths.project.getHref(project.id)}
    >
      <div className="w-[17rem] h-[17rem] sm:w-[19rem] sm:h-[19rem] bg-primary-lighter bg-opacity-90 group-hover:bg-opacity-70 px-4 py-3 sm:py-3.5 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
        <div className="absolute bottom-0 right-0 w-[17rem] h-[17rem] sm:w-[19rem] sm:h-[19rem] rounded-lg shadow-[5px_5px_22px_rgba(0,0,0,0.35)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
};
