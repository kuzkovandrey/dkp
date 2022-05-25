import React from "react";
import { Onboarding, Greeting, Preview } from "@pages";
import { RoutePaths } from "./routePaths";

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
