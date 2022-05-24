import React from "react";
import { Onboarding } from "../pages/Onboarding/Onboarding";
import { Greeting } from "../pages/Greeting/Greeting";

export type RouteType = {
  path: string;
  component: React.FunctionComponent;
};

export const Routes: RouteType[] = [
  {
    path: "/",
    component: Greeting,
  },
  {
    path: "/onboarding",
    component: Onboarding,
  },
  {
    path: "*",
    component: Greeting,
  },
];
