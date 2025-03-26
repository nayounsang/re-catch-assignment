import { FilterOption } from "../types/option";

export const getCompactArrayWithKey = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  array: T[],
  key: K
): T[] => {
  return array.filter((item) => item[key] !== undefined);
};

export const getUniqueArrayWithKey = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  array: T[],
  key: K
): T[] => {
  const uniqueValues = new Set<unknown>();
  return array.reduce((acc: T[], item) => {
    const value = item[key] as string;
    if (!uniqueValues.has(value)) {
      uniqueValues.add(value);
      acc.push(item);
    }

    return acc;
  }, []);
};

export const getOptionWithKey = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  array: T[],
  key: K
): FilterOption[] => {
  return array.map((item) => ({
    value: item[key] as string,
    text: item[key] as string,
  }));
};

export const getFinalOptionWithKey = <
  T extends Record<string, unknown>,
  K extends keyof T
>(
  array: T[],
  key: K
): FilterOption[] => {
  const compactArray = getCompactArrayWithKey(array, key);

  const uniqueArray = getUniqueArrayWithKey(compactArray, key);

  return getOptionWithKey(uniqueArray, key);
};
