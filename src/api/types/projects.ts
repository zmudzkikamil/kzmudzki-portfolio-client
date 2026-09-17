import { components } from "./api";

export type Category = "fullstack" | "react" | "html";

export type DetailedProject = Omit<
  components["schemas"]["Project"],
  "category"
> & {
  category: Category;
};

export type Project = Pick<
  DetailedProject,
  "id" | "category" | "image" | "title"
>;
