import Page2 from "../pages/Page2";
import SubPage2 from "../pages/SubPage2";

interface RouteConfig {
    path: string;
    name?: string;
    component?: React.ReactNode;
    children?: RouteConfig[];
}

export const AppRoutes: RouteConfig[] = [

    {
        path: '/page1',
        name: 'Página 1',
        children: [
            { path: '/page1/sub1', name: 'Sub Página 1', component: <SubPage2 /> },
            { path: '/page1/sub2', name: 'Sub Página 2', component: <SubPage2 /> },
        ],
    },
    {
        path: '/page2',
        name: 'Página 2',
        component: <Page2 />,
    },
];
