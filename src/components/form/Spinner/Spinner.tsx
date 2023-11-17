import { useState } from "react";
import { SpinnerProps } from "../../../types/models";
import "./index.scss";

export const Spinner: React.FC<SpinnerProps> = ({ onChange, value }) => {
  const [isToggled, setIsToggled] = useState(value);
  const handlerClick = () => {
    setIsToggled((prev) => {
      const result = !prev;
      onChange(result);
      return result;
    });
  };
  return (
    <div className={`spinner spinner--${isToggled ? "active" : "inactive"}`}>
      <div className="spinner__switch" onClick={handlerClick}>
        <div
          className={`spinner__switch__toggle spinner__switch__toggle--${
            isToggled ? "active" : "inactive"
          }`}
        ></div>
      </div>
    </div>
  );
};
