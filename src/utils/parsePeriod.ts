export interface ParsedPeriod {
  start: Date;
  end: Date;
}

export const parsePeriod = (period: string): ParsedPeriod => {
  const [startStr, endStr] = period.split(" - ");
  const [startMonth, startYear] = startStr.split("/").map(Number);
  const start = new Date(startYear, startMonth - 1);

  let end: Date;
  if (endStr.toLowerCase() === "present") {
    end = new Date();
  } else {
    const [endMonth, endYear] = endStr.split("/").map(Number);
    end = new Date(endYear, endMonth - 1);
  }

  return { start, end };
};
