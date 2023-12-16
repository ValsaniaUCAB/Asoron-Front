import authLogin from "../api/loginApi";

function postLogin(username, password) {
    const dataToSave = { username, password }
    return authLogin.post('/', dataToSave)
}
export default postLogin