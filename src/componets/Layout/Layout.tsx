import React, { useState } from 'react';
import { Header } from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return ( 
    <div className="flex h-screen bg-blue-50">
      <Sidebar className="w-64" sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-auto bg-blue-50">
          {children}
        </main>
      </div>
    </div>
  );
};
