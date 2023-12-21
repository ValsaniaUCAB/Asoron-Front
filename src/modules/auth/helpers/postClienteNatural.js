import api from "@/lib/api"
import { setHeader } from "@/lib/api"
import { setCookie } from "@/lib/cookies"

async function postClienteNatural(dataToSave) {
    console.log('data to save', dataToSave)
    try {
        const { data } = await api.post('store/clienteNatural/', dataToSave)
        console.log(data)
        setHeader(data.access)
        setCookie('access', data.access)
        return data
    } catch (error) {
        setCookie('access', '')
        console.log(error)
    }
}
export default postClienteNatural