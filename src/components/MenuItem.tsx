// Importamos el tipo MenuItem desde el archivo de tipos
import type { MenuItem } from "../types"

// Definimos los props que este componente va a recibir
type MenuItemProps = {
    item: MenuItem, // Un item del menú
    addItem: (item: MenuItem) => void // Una función para agregar un item al pedido
}

// Definimos el componente funcional MenuItem que recibe item y addItem como props
export default function MenuItem({ item, addItem } : MenuItemProps) {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-400 p-3 text-lg rounded-lg flex justify-between w-full"
        // Cuando el botón es clickeado, se llama a la función addItem pasando el item como argumento
        onClick={() => addItem(item)}
    >
        {/* Mostramos el nombre del item */}
        <p>{item.name}</p>
        {/* Mostramos el precio del item */}
        <p className="font-black">${item.price}</p>
    </button>
  )
}

