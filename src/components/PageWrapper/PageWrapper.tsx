import React, { FC } from "react";
import "./PageWrapperStyles.scss";

export interface PageWrapperProps {
  children: JSX.Element;
  verticalAlign?: "center" | "end" | "start";
}

export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  verticalAlign = "center",
}) => (
  <div style={{ justifyContent: verticalAlign }} className="page">
    {children}
  </div>
);
