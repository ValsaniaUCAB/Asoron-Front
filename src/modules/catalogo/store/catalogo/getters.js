
// export const myGetter =  ( state ) => {
//     return state
// }

const ronesEnCatalogo = (lista, begin, num) => {
    const listaAux = []
    let cont = 0
    for (let index = begin; index < begin + num; index++) {
        listaAux[cont] = lista[index]
        cont++
    }
    return listaAux
}

export const getRonesById = (state) => (id) => {

    // const entry = state.entries.find((entry) => entry.id === id)

    // if (!entry) {
    //     return
    // }

    // return { ...entry }             // Utuilizado para que las modifcaciones no se hagan directo en el objeto

    for (const entry of state.entries) {     // Forma Aless
        if (entry.id === id) {
            return { ...entry }

        }
    }
}

export const getRonesByTerm = (state) => (term = '') => {

    if (term.length === 0) {

        return ronesEnCatalogo(state.ronList, 0, 3)
    }
    return state.ronList.filter(ron => ron.ron_nombre.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getRonesMinimal = (state) => {
    return ronesEnCatalogo(state.ronList, 3, 3)
}