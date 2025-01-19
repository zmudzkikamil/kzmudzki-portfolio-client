import { Category, Project } from "@/api/types/projects";
import { ProjectItem } from "./project-item";

interface Props {
  projects: Project[];
  category: Category;
}

export const ProjectsCategory: React.FC<Props> = ({ projects, category }) => {
  const getCategoryTitle = (category: Category) => {
    switch (category) {
      case "react":
        return "React Projects";
      case "html":
        return "HTML Websites";
      default:
        return "Unknown Category";
    }
  };
  return (
    <div className="flex flex-col gap-16 text-secondary">
      <h2 className="text-3xl lg:text-4xl font-bold">
        {getCategoryTitle(category)}
      </h2>
      <div className="flex flex-wrap items-center justify-center xl:justify-between gap-16 xl:gap-10">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
