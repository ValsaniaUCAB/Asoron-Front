import axios from "axios";

const authLogin = axios.create({
    baseURL: 'http://127.0.0.1:8000/auth/jwt/create'

});

export default authLogin;