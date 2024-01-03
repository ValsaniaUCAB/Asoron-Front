
// export const myAction = async ({ commit }) => {

// }

import getCarrito from '../../helpers/getCarritoCliente'
import postItemCarrito from '../../helpers/postItemCarrito'


export const getCarritoCliente = async ({ commit }) => {
    const carrito = await getCarrito()
    console.log('carrito en actions', carrito)
    commit('setCarrito', carrito)
}

export const addProductoCarrito = async ({ commit }, data) => {
    const producto = await postItemCarrito(data)
    console.log(producto)
    commit('addItemCarrito', producto)
}