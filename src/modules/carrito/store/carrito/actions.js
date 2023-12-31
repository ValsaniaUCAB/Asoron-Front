
// export const myAction = async ({ commit }) => {

// }

import getCarrito from '../../helpers/getCarritoCliente'

export const getCarritoCliente = async ({ commit }) => {
    const carrito = await getCarrito()
    console.log('carrito en actions', carrito)
    commit('setCarrito', carrito)
}