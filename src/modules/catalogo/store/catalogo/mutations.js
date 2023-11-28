
// export const myMutation =  ( state ) => {
//
// }

export const setRonList = (state, ronList) => {
    state.ronList = [...state.ronList, ...ronList];
    state.isLoading = false;
}