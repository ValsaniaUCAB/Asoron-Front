import axios from "axios";

const eventoDetail = axios.create({
    baseURL: 'http://127.0.0.1:8000/store/evento-detail/'

});

export default eventoDetail;