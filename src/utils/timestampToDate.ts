// Converts a timestamp to a MM/YYYY formatted string
export const timestampToDate = (timestamp: Date): string => {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString();
  const year = date.getFullYear();

  return `${month}/${year}`;
};
