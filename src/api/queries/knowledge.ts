import { useQuery } from "@tanstack/react-query";
import { Knowledge } from "../types/knowledge";
import { getKnowledge } from "../services/knowledge";

export const useGetKnowledgeQuery = () => {
  return useQuery<Knowledge[], Error>({
    queryKey: ["knowledge"],
    queryFn: () => getKnowledge(),
  });
};
