import React from "react";
import { Onboarding } from "../pages/Onboarding/Onboarding";
import { Greeting } from "../pages/Greeting/Greeting";
import { RoutePaths } from "./routePaths";
import { Preview } from "../pages/Preview/Preview";

export type RouteType = {
  path: string;
  component: React.FunctionComponent;
};

export const Routes: RouteType[] = [
  {
    path: RoutePaths.ROOT,
    component: Greeting,
  },
  {
    path: RoutePaths.ONBOARDING,
    component: Onboarding,
  },
  {
    path: RoutePaths.NOT_MATCH,
    component: Greeting,
  },
  {
    path: RoutePaths.PREVIEW,
    component: Preview,
  },
];
