type ClassNames = Record<string, boolean>;

export const classNames = (obj: ClassNames): string => {
  return Object.entries(obj)
    .reduce((acc, [key, value]) => (value ? acc.concat(" ", key) : acc), "")
    .trim();
};
