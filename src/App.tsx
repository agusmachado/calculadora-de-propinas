import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

// Componente principal de la aplicación
function App() {

  // Utiliza el hook personalizado 'useOrder' para obtener y manejar el estado del pedido
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      
      {/* Contenedor principal con dos columnas en pantallas medianas */}
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 bg-slate-500">
        
        {/* Sección del menú */}
        <div className="p-5">
          <h2 className="font-black text-4xl bg-red-400">Menú</h2>

          {/* Mapeamos los items del menú */}
          <div className="mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}       // Llave única para cada item del menú
                item={item}         // Pasa el item actual al componente MenuItem
                addItem={addItem}   // Función para agregar el item al pedido
              />
            ))}
          </div>          
        </div>
        
        {/* Sección del pedido */}
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (  // Si hay items en el pedido, mostramos su contenido
            <>
              <OrderContents
                order={order}           // Pasa el pedido actual al componente OrderContents
                removeItem={removeItem} // Función para eliminar un item del pedido
              />

              <TipPercentageForm 
                setTip={setTip}   // Función para establecer el porcentaje de propina
                tip={tip}         // Valor actual del porcentaje de propina
              />
              <OrderTotals 
                order={order}     // Pasa el pedido actual al componente OrderTotals
                tip={tip}         // Pasa el porcentaje de propina al componente OrderTotals
                placeOrder={placeOrder} // Función para procesar el pedido
              />
            </>
          ) : (  // Si el pedido está vacío, mostramos un mensaje
            <p className="text-center">La orden está vacía</p>
          )}
          
        </div>        
      
      </main>
    </>
  )
}

export default App

