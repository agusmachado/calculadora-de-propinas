// Definimos el tipo de un item del menú
export type MenuItem = {
    id: number,
    name: string,
    price: number
}

/* Definimos el tipo de un item del pedido (order), que incluye todo lo que tiene MenuItem 
   y además le agregamos la cantidad (quantity), que va a ser de tipo número */
export type OrderItem = MenuItem & {
    quantity: number
}
