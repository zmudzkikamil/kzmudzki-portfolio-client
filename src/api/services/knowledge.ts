import { api } from "../api";
import { Knowledge } from "../types/knowledge";

export const getKnowledge = async (): Promise<Knowledge[]> => {
  return api.get("/knowledge");
};
