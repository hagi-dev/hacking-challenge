import React from "react";
import "./index.scss";
import { Dropdown } from "../Dropdown";
import { DropdownInputProps, SelectOption } from "../../../types/models";
import { Input } from "../Input";
import { ValidationType } from "../../../helpers/validation";

export const DropdownInput: React.FC<DropdownInputProps> = ({
  names,
  selected,
  placeholder,
  options,
  onChange,
  validation,
  error,
  required = false,
}) => {
  const [option, setOption] = React.useState<SelectOption>({
    label: selected.label,
    value: "",
  });
  const [errorLabel, setErrorLabel] = React.useState<string | null>("");
  const handleSelect = (value: string | number, name: string) => {
    setOption((prev) => {
      const newOptionSlected = { ...prev, label: String(value) };
      onChange(value, name);
      const formatName = name as ValidationType;
      if (validation) {
        const err = validation(formatName, String(value));
        if (err) {
          getError(false, name);
          setErrorLabel(String(err));
        } else {
          getError(false, name);
          setErrorLabel(null);
        }
      }
      return newOptionSlected;
    });
  };
  const getError = (value: boolean, name: string) => {
    if (error) {
      error(value, name);
    }
  };
  const onchangeInput = (value: string, name: string) => {
    setOption((prev) => {
      const newOptionValue = { ...prev, value: value };
      onChange(value, name);
      const formatName = option.label as ValidationType;
      if (validation) {
        const err = validation(formatName, value);
        if (err) {
          getError(false, name);
          setErrorLabel(String(err));
        } else {
          getError(false, name);
          setErrorLabel(null);
        }
      }
      return newOptionValue;
    });
  };
  return (
    <>
      <div
        className={`dropdown-input dropdrown-input--${errorLabel && "error"}`}
      >
        <Dropdown
          name={names.label}
          options={options}
          onSelect={handleSelect}
          defaultValue={option.label}
          version="secondary"
        />
        <Input
          name={names.value}
          type={option.label as ValidationType}
          placeholder={placeholder}
          value={option.value}
          onChange={onchangeInput}
          version="secondary"
          required={required}
        />
      </div>
    </>
  );
};
