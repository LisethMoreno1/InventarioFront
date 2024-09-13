import React from 'react';


export interface RouteConfig {
    path: string;
    name?: string;
    component?: React.ReactNode;
    children?: RouteConfig[];
}
