import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { inventoryData, salesData } from '../../data/data'

export const InventoryChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={inventoryData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cantidad" fill="#3B82F6" />
    </BarChart>
  </ResponsiveContainer>
)

export const SalesChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={salesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ventas" fill="#60A5FA" />
    </BarChart>
  </ResponsiveContainer>
)
