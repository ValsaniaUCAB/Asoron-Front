import axios from "axios";

const getUser = async (access) => {

    let api = axios.create({
        headers: {
            Authorization: "JWT " + access
        }
    })
    const { data } = await api.get('http://127.0.0.1:8000/auth/users/me/')

    return data
}

export default getUser  