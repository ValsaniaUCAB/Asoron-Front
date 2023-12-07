
// export const myMutation =  ( state ) => {
//
// }

export const setRonList = (state, ronList) => {
    state.ronList = [...ronList, ...state.ronList];
    state.isLoading = false;
}

export const vaciarRonList = (state) => {
    state.isLoading = true;
    state.ronList = []
}