import { api } from "../api";
import { ContactFormData } from "../types/contact";

export const sendContact = async (data: ContactFormData): Promise<void> => {
  return api.post("/contact", data);
};
