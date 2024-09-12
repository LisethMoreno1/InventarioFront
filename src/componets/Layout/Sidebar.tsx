import { Accordion } from '@reach/accordion';
import '@reach/accordion/styles.css';
import { LogOut } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import useSidebarItems from '../../hooks/Layout/useSidebarItems';
import { routes } from '../../router/routes';

interface SidebarProps {
  className?: string;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  const sidebarItems = useSidebarItems({ routes });

  return (
    <aside className={`flex flex-col h-screen ${sidebarOpen ? 'w-64' : 'w-0'} bg-blue-800 text-white overflow-y-auto transition-all duration-300 ease-in-out`}>
      <div className="p-4">
        <h2 className="text-2xl font-semibold">AutoMechanic</h2>
      </div>
      <Accordion collapsible className="flex-grow w-full">
        {sidebarItems}
      </Accordion>
      <div className="p-4 bg-blue-800">
        <Link className="flex items-center text-blue-300 hover:text-white" to="/logout">
          <LogOut className="w-5 h-5 mr-3" />
          Cerrar sesión
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;



