import { Category, Project } from "@/api/types/projects";

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
    <div>
      <h2>{getCategoryTitle(category)}</h2>
      <div className="flex gap-4">
        {projects.map((project) => (
          <div className="bg-secondary rounded-xl" key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
