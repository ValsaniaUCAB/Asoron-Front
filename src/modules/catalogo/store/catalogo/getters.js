
// export const myGetter =  ( state ) => {
//     return state
// }

const ronesEnCatalogo = (lista, begin, num) => {
    const listaAux = []
    let cont = 0
    for (let index = begin; index < begin + num; index++) {
        if (lista[index]) {
            listaAux[cont] = lista[index]
        }
        cont++
    }
    return listaAux
}

export const getRonesById = (state) => (id) => {
    for (const entry of state.entries) {     // Forma Aless
        if (entry.id === id) {
            return { ...entry }

        }
    }
}

export const getRonesByTerm = (state) => (term = '', begin = 0) => {

    if (term.length === 0) {

        return ronesEnCatalogo(state.ronList, begin, 6)
    }
    return ronesEnCatalogo(state.ronList.filter(ron => ron.ron_nombre.toLowerCase().includes(term.toLocaleLowerCase())), begin, 6)
}

export const getRonesMinimal = (state) => {
    return ronesEnCatalogo(state.ronList, 0, 3)
}

export const getIsLoading = (state) => state.isLoading

export const getRonList = (state) => state.ronList