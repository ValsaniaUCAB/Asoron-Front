import api from "@/lib/api"
import { getHeader } from "@/lib/api"
import getClienteNatural from "./getNatural";
import getClienteJuridico from "./getJuridico";
import getEmpleado from "./getEmpleado";

const getUser = async () => {
    if (!getHeader()) {
        console.log('no hay token')
        return
    }
    try {
        const { data } = await api.get('/auth/users/me/')
        console.log('Usuario', data)
        if (data.is_staff) {
            console.log('Entra a empleado')
            data.data = await getEmpleado()
        }
        if (data.fk_usua_clie_natu) {
            console.log('Entra a natural')
            data.data = await getClienteNatural()
        }
        if (data.fk_usua_clie_juri) {
            console.log('Entra a juridico')
            await getClienteJuridico()
        }
        return data
    } catch (error) {
        console.log('error', error)
    }
}

export default getUser