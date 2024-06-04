export type MenuItem = {
    id: number,
    name: string,
    price: number
}

/* Tomamos todo lo que tiene MenuItem y le agregamos la cantidad ( quantity ), que va a ser de tipo número*/
export type OrderItem = MenuItem & {
    quantity: number
}