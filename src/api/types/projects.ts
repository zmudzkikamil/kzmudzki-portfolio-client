import { components } from "./api";

export type Category = "react" | "html";

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
