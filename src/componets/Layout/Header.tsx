import { Bell, Menu, Search, User } from 'lucide-react';
import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-4 text-blue-800 p-2 hover:bg-blue-100 rounded"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </button>
          <h2 className="text-xl font-semibold text-blue-800">Dashboard</h2>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-64 px-4 py-2 text-gray-700 bg-blue-50 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <Search className="w-4 h-4 text-blue-500" />
            </button>
          </div>
          <button className="ml-4 text-blue-500 hover:text-blue-600 p-2 rounded">
            <Bell className="w-6 h-6" />
          </button>
          <button className="ml-4 text-blue-500 hover:text-blue-600 p-2 rounded">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };

