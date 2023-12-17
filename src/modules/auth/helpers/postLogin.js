// import authLogin from "../api/loginApi";
import api from "@/lib/api"
import { setHeader } from "@/lib/api"


// function postLogin(username, password) {
//     const dataToSave = { username, password }
//     return authLogin.post('/', dataToSave)
// }

async function postLogin(username, password) {
    const dataToSave = { username, password }
    const { data } = await api.post('/auth/jwt/create/', dataToSave)
    setHeader(data.access)
    return data
}
export default postLogin