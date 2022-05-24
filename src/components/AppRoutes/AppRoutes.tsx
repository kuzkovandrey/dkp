import React, { FC } from "react";
import { AppRoutesProps } from "./AppRoutesProps";
import { Routes, Route } from "react-router-dom";

export const AppRoutes: FC<AppRoutesProps> = ({ routes }) => (
  <Routes>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} element={<route.component />} />
    ))}
  </Routes>
);
