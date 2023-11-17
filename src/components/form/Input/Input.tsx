import React, { useState } from "react";
import { InputProps } from "../../../types/models";

import "./index.scss";

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  version = "primary",
  name,
  required = false,
  pattern,
  validation,
  error,
}) => {
  const [errorLabel, setErrorLabel] = useState<string | null>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue, name);

    if (validation) {
      const errorMessage = validation(type, newValue);
      setErrorLabel(errorMessage);
      if(!errorMessage){
        getError(false , name);
      }else{
        getError(true , name);
      }
    }
  };

  const getError = (value: boolean, name:string) => {
    if (error) { 
      error(value, name);
    }
  }

  return (
    <div className="input-container">
      <input
        name={name}
        className={`input-container__input input-container__input--${version} input-container__input--${errorLabel && 'error'}`}
        type={type}
        value={value}
        maxLength={type === "dni" ? 8 : type === "phone" ? 9 : type === 'ruc' ? 11 : 100}
        onChange={handleInputChange}
        placeholder={String(placeholder)}
        required={required}
      />
      {errorLabel && <div className="input-container__error">{errorLabel}</div>}
    </div>
  );
};
