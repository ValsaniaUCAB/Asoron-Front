import api from "@/lib/api"
import { getHeader } from "@/lib/api"

const getUser = async () => {
    if (!getHeader()) {
        console.log('no hay token')
        return
    }
    try {
        const { data } = await api.get('/auth/users/me/')
        console.log('Usuario', data)
        return data
    } catch (error) {
        console.log('error', error)
    }
}

export default getUser