import { TYPE_DOCUMENT } from "../../../types/constants";
import { SelectOption } from "../../../types/models";

export const optionsTypeDocuments: SelectOption[] = [
    { label: "DNI", value: TYPE_DOCUMENT.DNI },
    { label: "RUC", value: TYPE_DOCUMENT.RUC },
  ];