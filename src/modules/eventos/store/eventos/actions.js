
// export const myAction = async ({ commit }) => {

// }

import getEventList from "../../helpers/getEventList";


export const cargarEventos = async ({ commit, getters }) => {
    commit('vaciarEventList')
    const eventosList = await getEventList('/')
    if (getters.getEventList.length === 0) {
        commit('setEventList', eventosList)
    }
}
