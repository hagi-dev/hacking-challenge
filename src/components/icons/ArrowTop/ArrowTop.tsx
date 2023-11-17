import React from "react";
import { TypeIcon } from "../../../types/models";
import "./index.scss";

export const ArrowTop = ({ color = "#A9AFD9", className }: TypeIcon) => {
  return (
    <svg
      className="arrow-top"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`arrow-top__path arrow-top__path--${className}`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.05837 7.45073C0.659293 7.04052 0.657391 6.38081 1.0541 5.9683L6.24689 0.568697C6.65382 0.145557 7.32401 0.143625 7.73338 0.564412L12.9572 5.93399C13.3563 6.34421 13.3582 7.00392 12.9615 7.41643C12.5545 7.83956 11.8844 7.8415 11.475 7.42071L6.99662 2.81738L2.54486 7.44645C2.13792 7.86959 1.46774 7.87152 1.05837 7.45073Z"
        fill={color}
      />
    </svg>
  );
};
