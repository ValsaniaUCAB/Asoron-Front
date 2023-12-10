import axios from "axios";

const ronCatalogo = axios.create({
    baseURL: 'http://127.0.0.1:8000/store/inventario-tienda'

});

export default ronCatalogo;