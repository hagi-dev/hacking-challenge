import { ValidationType } from "../../../helpers/validation";
import { SelectOption } from "../common";

export interface DropdownInputProps {
    options: SelectOption[];
    onChange: (value: string | number, name: string) => void;
    selected: SelectOption;    
    className?: string;
    placeholder?: string;
    names: {label: string, value: string};
    validation?: (type: ValidationType , input:string)=>  string | null
    error?: (value: boolean, name:string) => void,
    required?: boolean;
  }