
// export const myMutation =  ( state ) => {
//
// }

export const setToken = (state, payload) => {
    state.token.access = payload.access
    state.token.refresh = payload.refresh
}

export const setUser = (state, payload) => {
    state.user = payload
}