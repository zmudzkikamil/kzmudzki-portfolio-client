import { AxiosError } from "axios";

export function extractServerError(error: Error | null): string | null {
  if (!error) return null;
  const data = (error as AxiosError<{ message: string | string[] }>).response
    ?.data;
  if (!data) return error.message;
  const { message } = data;
  return Array.isArray(message) ? message.join(". ") : message;
}
