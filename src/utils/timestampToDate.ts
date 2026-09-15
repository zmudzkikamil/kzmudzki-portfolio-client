// Converts a timestamp to a MM/YYYY formatted string. Accepts the ISO strings
// the API serves for its timestamptz columns, as well as epoch numbers and
// Date objects - `new Date` handles all three.
export const timestampToDate = (timestamp: string | number | Date): string => {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString();
  const year = date.getFullYear();

  return `${month}/${year}`;
};
