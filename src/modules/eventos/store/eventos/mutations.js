
// export const myMutation =  ( state ) => {
//
// }

export const vaciarEventList = (state) => {
    state.isLoading = true;
    state.eventosList = []
}

export const setEventList = (state, eventosList) => {
    state.eventosList = [...state.eventosList, ...eventosList];
    state.isLoading = false;
}