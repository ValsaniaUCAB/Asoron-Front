
// export const myAction = async ({ commit }) => {

// }

import getRonList from "../../helpers/getRonList";


export const cargarRones = async ({ commit, getters }) => {
    commit('vaciarRonList')
    const ronList = await getRonList('/')
    if (getters.getRonList.length === 0) {
        commit('setRonList', ronList)
    }
}
