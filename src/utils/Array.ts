import { FilterOption } from "../types";

export const getOptionWithKey = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  array: T[],
  key: K
): FilterOption[] => {
  const uniqueValues = new Set<string>();

  return array
    .filter((item) => item[key] !== undefined)
    .reduce((acc: FilterOption[], item) => {
      const value = item[key] as string;
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
        acc.push({
          value,
          text: value,
        });
      }

      return acc;
    }, []);
};
