
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