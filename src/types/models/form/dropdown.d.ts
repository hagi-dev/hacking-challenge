import { SelectOption } from '../common';

export interface DropdownProps {
  options: SelectOption[];
  onSelect: (selectedOption: string | number, name: string) => void;
  defaultValue?: string | number;
  version?: string;
  name: string;
}
