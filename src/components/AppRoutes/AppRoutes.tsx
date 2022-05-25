import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteType } from "@values";

export interface AppRoutesProps {
  routes: RouteType[];
}

export const AppRoutes: FC<AppRoutesProps> = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};
