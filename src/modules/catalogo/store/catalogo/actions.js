
// export const myAction = async ({ commit }) => {

// }

import getRonList from "../../helpers/getRonList";


export const cargarRones = async ({ commit }) => {
    //! commit('vaciarRonList')
    const ronList = await getRonList('/')
    commit('setRonList', ronList)
}
