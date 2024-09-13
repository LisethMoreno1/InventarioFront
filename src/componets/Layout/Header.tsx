import { Bell, Search, User } from "lucide-react";

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-gray-800">Mi Aplicación</h1>
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button className="mr-4 text-gray-600 hover:text-gray-800">
            <Bell size={24} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <User size={24} />
          </button>
        </div>
      </div>
    </div>
  </header>
)

export default Header