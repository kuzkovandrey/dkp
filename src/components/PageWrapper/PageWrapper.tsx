import React, { FC } from "react";
import { PageWrapperProps } from "./PageWrapperProps";
import "./PageWrapperStyles.scss";

export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  verticalAlign = "center",
}) => (
  <div style={{ justifyContent: verticalAlign }} className="page">
    {children}
  </div>
);
