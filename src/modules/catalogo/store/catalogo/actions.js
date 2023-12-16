
// export const myAction = async ({ commit }) => {

// }

import getRonList from "../../helpers/getRonList";


export const cargarRones = async ({ commit, getters }) => { // Funcion que carga los rones desde la bd
    commit('vaciarRonList')
    const { paginacion, ronList } = await getRonList(getters.getBusqueda, getters.getActualPage)
    if (getters.getRonList.length === 0) {
        console.log(paginacion)
        commit('setPages', paginacion)
        commit('setRonList', ronList)
    }
}
