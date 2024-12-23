import { useQuery } from "@tanstack/react-query";
import { getCerts } from "../services/certs";
import { Cert } from "../types/certs";

export const useGetCertsQuery = () => {
  return useQuery<Cert[], Error>({ queryKey: ["certs"], queryFn: getCerts });
};
