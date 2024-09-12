import React from 'react';
import { AccordionItem, AccordionButton, AccordionPanel } from '@reach/accordion';
import { RouteConfig } from '../../router/RouteType';
import useSidebarStore from '../../store/Layout/sidebarStore';


interface UseSidebarItemsProps {
  routes: RouteConfig[];
}

const useSidebarItems = ({ routes }: UseSidebarItemsProps) => {
  const closeSidebar = useSidebarStore(state => state.closeSidebar);

  const renderSidebarItems = React.useCallback(
    (routes: RouteConfig[]) =>
      routes.map((route, index) => (
        <AccordionItem key={index} className="w-full">
          {route.path ? (
            <>
              <AccordionButton
                className="py-2 text-base flex items-center hover:bg-accent hover:text-accent-foreground"
                onClick={() => {
                  if (!route.children?.length) {
                    closeSidebar();
                  }
                }}
              >
                {route.icon && <route.icon className="w-10 h-5 mr-3" />}
                {route.label}
              </AccordionButton>
              <AccordionPanel>
                <div className="flex flex-col space-y-1 pl-6">
                  {route.children?.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-center"
                      aria-expanded={false}
                    >
                      <a
                        className="flex items-center px-8 py-2 hover:bg-blue-700"
                        href={subItem.path ?? '#'}
                        onClick={() => closeSidebar()}
                      >
                        {subItem.icon && <subItem.icon className="w-10 h-5 mr-3" />}
                        {subItem.label}
                      </a>
                    </div>
                  ))}
                </div>
              </AccordionPanel>
            </>
          ) : (
            <button
              className="flex items-center w-full text-left py-2 px-4 hover:bg-blue-700 transition-colors"
              aria-expanded={false}
              onClick={() => closeSidebar()}
            >
              {route.icon && <route.icon className="w-10 h-5 mr-3" />}
              {route.label}
            </button>
          )}
        </AccordionItem>
      )),
    [routes, closeSidebar]
  );

  return renderSidebarItems(routes);
};

export default useSidebarItems;
