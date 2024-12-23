import { api } from "../api";
import { Cert } from "../types/certs";

export const getCerts = async (): Promise<Cert[]> => {
  return api.get("/certs");
};
