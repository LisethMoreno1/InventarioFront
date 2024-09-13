import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RouteConfig } from '../../router/RouteConfig';
import { LogOut } from 'lucide-react';

interface SidebarProps {
  routes: RouteConfig[];
}

function Sidebar({ routes }: SidebarProps) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (path: string) => {
    setOpenMenus((prev) =>
      prev.includes(path) ? prev.filter((item) => item !== path) : [...prev, path]
    );
  };

  const renderSubMenu = (children: RouteConfig[], parentPath: string) => (
    <ul className="pl-4">
      {children.map((subRoute, index) => (
        <li key={index} className="mb-2">
          <Link
            to={subRoute.path}
            className={`block p-2 rounded ${location.pathname === subRoute.path ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            {subRoute.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-64 bg-gray-900 text-white h-full flex flex-col">
      <div className="p-4 font-bold text-lg bg-gray-800">Mi Aplicación</div>
      <ul className="mt-4 p-4">
        {routes.map((route, index) => (
          <li key={index} className="mb-4">
            {route.children ? (
              <>
                <button
                  onClick={() => toggleMenu(route.path)}
                  className={`block p-2 rounded ${openMenus.includes(route.path) ? 'bg-gray-700' : 'hover:bg-gray-700'} w-full text-left`}
                >
                  {route.name}
                </button>
                {openMenus.includes(route.path) && renderSubMenu(route.children, route.path)}
              </>
            ) : (
              <Link
                to={route.path}
                className={`block p-2 rounded ${location.pathname === route.path ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                {route.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

  
    </div>
  );
}

export default Sidebar;
