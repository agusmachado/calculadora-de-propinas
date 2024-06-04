import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  /* console.log(menuItems) */

 const { order, addItem, removeItem, tip, setTip, placeOrder  } =  useOrder()

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      {/* md: es cuando activo el media query */}
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 bg-slate-500">
        
        <div className="p-5">
          <h2 className="font-black text-4xl bg-red-400">Menú</h2>

          {/* PASO 1 - Mapeamos los items del menú */}
            <div className="mt-10 space-y-3">
              { menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
              ))}
            </div>          
        </div>
        
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents
              order={order}
              removeItem={removeItem}
              />

              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
          
        </div>        
      
      </main>
    </>
  )
}

export default App
