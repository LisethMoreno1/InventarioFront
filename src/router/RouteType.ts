import { FC, ReactNode } from "react";

export interface RouteConfig {
  path?: string;
  label?: string;
  element?: ReactNode;
  children?: RouteConfig[];
  icon?: FC<{ className?: string }>;

}
