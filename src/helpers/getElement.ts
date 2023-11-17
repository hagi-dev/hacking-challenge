import { SelectOption } from "../types/models";

export const getLabel = (
  value: string | number,
  options: SelectOption[]
): string => {
  return options.find((option) => option.value === value)?.label ?? "";
};
