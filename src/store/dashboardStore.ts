import { create } from 'zustand'
import { InventoryData, SalesData } from '../types/types'

export const useDashboardStore = create((set) => ({
    inventoryData: [] as InventoryData[],   // Declara que inventoryData es un array de InventoryData
    salesData: [] as SalesData[],           // Declara que salesData es un array de SalesData,

    // Define el tipo del parámetro 'data'
    setInventoryData: (data: InventoryData[]) => set({ inventoryData: data }),
    setSalesData: (data: SalesData[]) => set({ salesData: data }),
}))
