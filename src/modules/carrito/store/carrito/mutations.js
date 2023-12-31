
// export const myMutation =  ( state ) => {
//
// }

export const setCarrito = (state, carrito) => {
    state.uuid = carrito.uuid
    state.items = carrito.items
}