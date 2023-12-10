
// export const myGetter =  ( state ) => {
//     return state
// }

export const getRonesByTerm = (state) => (term = '') => {

    if (term.length === 0) {
        return state.ronList
    }
    return state.ronList.filter(ron => ron.ron_nombre.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getEventList = (state) => state.eventosList

export const getIsLoading = (state) => state.isLoading