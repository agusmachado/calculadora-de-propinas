import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

// Define las propiedades que se esperan en el componente OrderTotals
type OrderTotalsProps = {
    order: OrderItem[],  // Lista de artículos en la orden
    tip: number,         // Porcentaje de propina
    placeOrder: () => void  // Función para guardar la orden
}

// Componente OrderTotals que recibe las propiedades definidas en OrderTotalsProps
export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    // Calcula el subtotal sumando el precio de cada artículo multiplicado por su cantidad
    const subtotalAmount = order.reduce((total, item) => total + (item.quantity * item.price), 0)

    // Calcula la cantidad de propina multiplicando el subtotal por el porcentaje de propina
    const tipAmount = subtotalAmount * tip

    // Calcula el total sumando el subtotal y la cantidad de propina
    const totalAmount = subtotalAmount + tipAmount

    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className=" font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className=" font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar: {''}
                <span className=" font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
            className=" w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
