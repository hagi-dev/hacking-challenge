import { useState } from "react";
import { CheckboxProps } from "../../../types/models";
import { Check } from '../../icons';

import "./index.scss";

export const InputCheckbox: React.FC<CheckboxProps> = ({
  children,
  onChange,
  checked = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheck = () => {
    const newCheckedState = !isChecked;
    onChange(newCheckedState);
    setIsChecked(newCheckedState);
  };
  return (
    <div className="input-checkbox">
      <div
        onClick={toggleCheck}
        className={`input-checkbox__input input-checkbox__input--${
          isChecked ? "checked" : "not-checked"
        }`}
      >
        {isChecked && <Check className="primary"/>}
      </div>
      <div className="input-checkbox__children">{children}</div>
    </div>
  );
};
