import { useQuery } from "@tanstack/react-query";
import { Knowledge } from "../types/knowledge";
import { getKnowledge } from "../services/knowledge";

export const getKnowledgeOptions = () => ({
  queryKey: ["knowledge"],
  queryFn: () => getKnowledge(),
});

export const useGetKnowledgeQuery = () => {
  return useQuery<Knowledge[], Error>(getKnowledgeOptions());
};
