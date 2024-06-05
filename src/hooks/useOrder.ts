import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

  // Estado para manejar los items en la orden
  const [order, setOrder] = useState<OrderItem[]>([])
  // Estado para manejar la propina
  const [tip, setTip] = useState(0)

  // Función para agregar un item a la orden
  const addItem = (item: MenuItem) => {
    // Verificamos si el item ya existe en la orden
    const itemExist = order.find(orderItem => orderItem.id === item.id)

    if (itemExist) {
      // Si el item ya existe, actualizamos su cantidad
      const updatedOrder = order.map(orderItem => 
        orderItem.id === item.id ? 
          { ...orderItem, quantity: orderItem.quantity + 1 } 
        : 
          orderItem
      )
      setOrder(updatedOrder)
    } else {
      // Si el item no existe, lo agregamos con una cantidad inicial de 1
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  // Función para remover un item de la orden
  const removeItem = (id: MenuItem['id']) => {
    // Filtramos el item que queremos remover basado en su id
    setOrder(order.filter(item => item.id !== id))
  }

  // Función para finalizar la orden
  const placeOrder = () => {
    // Reseteamos la orden y la propina
    setOrder([])
    setTip(0)
  }

  // Retornamos los estados y funciones que serán utilizadas en el componente
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}

