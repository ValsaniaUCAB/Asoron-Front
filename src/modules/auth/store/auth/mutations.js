
// export const myMutation =  ( state ) => {
//
// }

export const setToken = (state, { access, refresh }) => {

    if (access) state.token.access = access
    if (refresh) state.token.refresh = refresh
}

export const setUser = (state, payload) => {
    state.user = payload
}