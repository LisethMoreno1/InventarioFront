import React from 'react';
import { InventoryChart, SalesChart } from '../componets/Layout/Chart';
import { InventoryPieChart } from '../componets/Layout/PieChart';


export const Dashboard: React.FC = () => (

    <div className="container mx-auto px-6 py-8">
      <h3 className="text-3xl font-medium text-blue-800">Resumen del Inventario</h3>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold mb-4 text-blue-800">Inventario actual</h4>
          <InventoryChart />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h4 className="text-xl font-semibold mb-4 text-blue-800">Ventas mensuales</h4>
          <SalesChart />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 md:col-span-2">
          <h4 className="text-xl font-semibold mb-4 text-blue-800">Distribución de Inventario</h4>
          <InventoryPieChart />
        </div>
      </div>
    </div>

);
