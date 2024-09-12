import { useState } from 'react'
import { inventoryData, salesData } from '../../data/data'

export const useDashboardData = () => {
  const [inventory, setInventory] = useState(inventoryData)
  const [sales, setSales] = useState(salesData)

  return {
    inventory,
    sales,
    setInventory,
    setSales,
  }
}
