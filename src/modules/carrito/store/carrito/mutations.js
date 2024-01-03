
// export const myMutation =  ( state ) => {
//
// }

export const setCarrito = (state, carrito) => {
    state.uuid = carrito.uuid
    state.items = carrito.items
}

export const vaciarCarrito = (state) => {
    state.uuid = null
    state.items = []
}

export const changeCantidadItemCarrito = (state, { index, cantidad }) => {
    state.items[index].cantidad = cantidad
}

export const addItemCarrito = (state, item) => {
    state.items.push(item)
}