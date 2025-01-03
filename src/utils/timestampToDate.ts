// Converts a timestamp to a MM/YYYY formatted string
export const timestampToDate = (timestamp: number): string => {
  if (isNaN(timestamp)) {
    throw new Error("Invalid timestamp provided.");
  }

  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString();
  const year = date.getFullYear();

  return `${month}/${year}`;
};
