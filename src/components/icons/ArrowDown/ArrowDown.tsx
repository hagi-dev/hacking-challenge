import React from "react";
import { TypeIcon } from "../../../types/models";
import "./index.scss";

export const ArrowDown = ({ color = "#A9AFD9", className }: TypeIcon) => {
  return (
    <svg
      className="arrow-down"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`arrow-down__path arrow-down__path--${className}`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9516 0.566473C13.3495 0.977836 13.3495 1.63755 12.9516 2.04891L7.74324 7.43353C7.3351 7.85549 6.6649 7.85549 6.25675 7.43353L1.04842 2.04891C0.650526 1.63755 0.650526 0.977835 1.04842 0.566473C1.45657 0.144508 2.12676 0.144508 2.53491 0.566473L7 5.18269L11.4651 0.566473C11.8732 0.144509 12.5434 0.144509 12.9516 0.566473Z"
        fill={color}
      />
    </svg>
  );
};
