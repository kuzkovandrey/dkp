import React, { FC, useId } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteType } from "../../values";

export interface AppRoutesProps {
  routes: RouteType[];
}

export const AppRoutes: FC<AppRoutesProps> = ({ routes }) => {
  const id = useId();

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={id} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};
