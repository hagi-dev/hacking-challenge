import { ValidationType } from "../../../helpers/validation";

export interface InputProps {
  value: string | number;
  onChange: (value: string, name: string) => void;
  placeholder?: string | number;
  type?: ValidationType;
  version?: string;
  name: string;
  required?: boolean;
  pattern?: string;
  validation?: (type:ValidationType,value: string) => string | null;
  error?: (value: boolean, name:string) => void,
}