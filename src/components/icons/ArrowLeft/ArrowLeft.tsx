import { TypeIcon } from "../../../types/models";
import "./index.scss";

export const ArrowLeft = ({ color = "#FF1C44", className }: TypeIcon) => {
  return (
    <svg
    className="arrow-left"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      className={`arrow-left__path arrow-left__path--${className}`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.06012 2.42905C7.8133 2.19032 7.41747 2.19032 7.17065 2.42905L3.93988 5.55405C3.6867 5.79894 3.6867 6.20106 3.93988 6.44595L7.17065 9.57095C7.41747 9.80968 7.8133 9.80968 8.06012 9.57095C8.3133 9.32606 8.3133 8.92394 8.06012 8.67905L5.29039 6L8.06012 3.32095C8.31329 3.07606 8.31329 2.67394 8.06012 2.42905Z"
        fill={color}
      />
    </svg>
  );
};
