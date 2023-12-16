
// export const myAction = async ({ commit }) => {

// }

import postLogin from "../../helpers/postLogin";
import getUser from "../../helpers/getUser";

export const login = async ({ commit, getters }, { username, password }) => {
    const { data } = await postLogin(username, password)
    console.log(data)
    commit('setToken', data)
    console.log(await getUser(getters.getTokenAccess))
}

// export const getUserData = async ({ commit, getters }) => {
//     console.log('Tengo un peo')
//     console.log(getters.getTokenAccess)
//     // const { data } = await getUser(getters.getTokenAccess)
//     // commit('setUserData', data)
// }