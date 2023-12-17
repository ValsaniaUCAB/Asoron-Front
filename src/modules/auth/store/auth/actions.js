
// export const myAction = async ({ commit }) => {

// }

import postLogin from "../../helpers/postLogin";
import getUser from "../../helpers/getUser";
import { getHeader } from "@/lib/api"

export const login = async ({ commit }, { username, password }) => {
    console.log('header antes del post Login', getHeader())
    const data = await postLogin(username, password)
    commit('setToken', data)
    commit('setUser', getUser())
}
