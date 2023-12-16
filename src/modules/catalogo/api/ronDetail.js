import axios from "axios";

const ronDetail = axios.create({
    baseURL: 'http://127.0.0.1:8000/store/botella-detail/'

});

export default ronDetail;