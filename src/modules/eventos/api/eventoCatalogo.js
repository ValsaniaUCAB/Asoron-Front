import axios from "axios";

const eventoCatalogo = axios.create({
    baseURL: 'http://127.0.0.1:8000/store/evento'

});

export default eventoCatalogo;