import React from "react";
import { PageProps } from "../../../types/models";

import "./index.scss";

export const Page: React.FC<PageProps> = ({ children, isHeader = false }) => {
  return (
    <main className="main">
      <div
        className={`main__header main__header--${isHeader ? "show" : "hide"}`}
      ></div>
      <div className={`main__container`}>{children}</div>
    </main>
  );
};

