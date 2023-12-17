
// export const myAction = async ({ commit }) => {

// }

import postLogin from "../../helpers/postLogin";
import getUser from "../../helpers/getUser";
import { setHeader, getHeader } from "@/lib/api"
import { getCookie } from "@/lib/cookies"


export const login = async ({ commit }, { username, password }) => {
    console.log('header antes del post Login', getHeader())
    const data = await postLogin(username, password)
    commit('setToken', data)
    commit('setUser', getUser())
}

export const findUser = async ({ commit }) => {
    console.log(getCookie('access'))

    const data = getCookie('access')
    if (data) {
        setHeader(data)
        commit('setToken', { access: data })
        commit('setUser', getUser())
    }
}