export const isEqualValue = (
  valueFirst: unknown,
  valueSecond: unknown
): boolean => {
  if (!valueFirst || !valueSecond) return false;
  return valueFirst === valueSecond;
};
