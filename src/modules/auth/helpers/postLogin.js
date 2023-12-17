// import authLogin from "../api/loginApi";
import api from "@/api"
import { setHeader } from "@/api"


// function postLogin(username, password) {
//     const dataToSave = { username, password }
//     return authLogin.post('/', dataToSave)
// }

async function postLogin(username, password) {
    const dataToSave = { username, password }
    const { data } = await api.post('/auth/jwt/create/', dataToSave)
    console.log('data en postLogin', data)
    setHeader(data.access)
    return data
}
export default postLogin