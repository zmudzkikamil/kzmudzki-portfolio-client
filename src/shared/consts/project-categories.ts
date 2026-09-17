import { Category } from "@/api/types/projects";

// The portfolio renders the categories in this order, so the list doubles as
// the running order of the page: full-stack work leads, the React exercises
// follow, the early HTML sites close.
export const projectCategories: Category[] = [
  "fullstack",
  "react",
  "html",
] as const;
