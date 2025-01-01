import { components } from "./api";

export type CompanyName =
  | "Fujitsu Technology Solutions"
  | "Freelancer Web Development";

export type ExperienceCompany = Omit<
  components["schemas"]["Experience"],
  "company"
> & {
  company: CompanyName;
};
export type ExperiencePosition = components["schemas"]["Position"];
