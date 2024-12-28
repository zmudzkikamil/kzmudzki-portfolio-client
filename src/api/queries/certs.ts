import { useQuery } from "@tanstack/react-query";
import { getCerts } from "../services/certs";
import { Cert } from "../types/certs";

export const getCertsOptions = () => ({
  queryKey: ["certs"],
  queryFn: getCerts,
});

export const useGetCertsQuery = () => {
  return useQuery<Cert[], Error>(getCertsOptions());
};
