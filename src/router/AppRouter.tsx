import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { RouteConfig } from './RouteType';


const renderRoutes = (routes: RouteConfig[]) =>
  routes.map((route, index) => (
    
    <Route key={index} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

const AppRouter: React.FC = () => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};

export default AppRouter;
