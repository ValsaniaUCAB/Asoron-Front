
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

export const changeMontoTotal = (state, monto) => {
    state.montoTotal = monto
}

export const agregarOfertaCarrito = (state, { index, oferta }) => {

    state.items[index].oferta = oferta
}

export const quitarOfertaCarrito = (state, index) => {
    state.items[index].oferta = null
}