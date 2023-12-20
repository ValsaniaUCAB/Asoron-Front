import api from '@/lib/api'

function arreglar(item) {
    const obj = {

    }
    return obj
}

async function getDiarioRonero() {
    const { data } = await api.get(`/store/diario-ronero/`)
    console.log('Data arreglada', arreglar(data))
    return arreglar(data)
}

export default getDiarioRonero