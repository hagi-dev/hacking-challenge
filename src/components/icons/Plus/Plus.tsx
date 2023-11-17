import { TypeIcon } from "../../../types/models";
import "./index.scss";

export const Plus = ({ color = "#6F7DFF", className }: TypeIcon) => {
  return (
    <svg
    className="plus"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      className={`plus__path plus__path--${className}`}
        d="M8.00012 3V13"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
      className={`plus__path plus__path--${className}`}
        d="M13.0001 8L3.00012 8"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};
