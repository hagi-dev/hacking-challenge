import { TypeIcon } from "../../../types/models";
import "./index.scss";

export const Subtract = ({ color = "#6F7DFF", className }: TypeIcon) => {
  return (
    <svg
    className="subtract"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      className={`subtract__path subtract__path--${className}`}
        d="M13.0001 8L3.00012 8"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};
