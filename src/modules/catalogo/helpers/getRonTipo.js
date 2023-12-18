import api from '@/lib/api';

const getRonTipoList = async() => {
    const { data } = await api.get(`/store/tipo-ron/`)
    const lista = []
    for (const tipo of data) {
        lista.push(tipo.tipo_ron_nombre) 
    }
    return lista
}

export default getRonTipoList;