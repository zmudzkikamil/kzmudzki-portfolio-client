import { components } from "./api";

export type Category = "react" | "html";

export type DetailedProject = Omit<
  components["schemas"]["Project"],
  "category"
> & {
  category: Category;
  /**
   * Live site of the project, for the ones that are deployed somewhere a
   * visitor can click through to. Written by hand because `api.d.ts` has not
   * been regenerated since the backend gained the field.
   */
  url?: string | null;
};

export type Project = Pick<
  DetailedProject,
  "id" | "category" | "image" | "title"
>;
