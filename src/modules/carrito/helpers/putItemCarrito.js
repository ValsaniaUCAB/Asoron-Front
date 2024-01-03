import api from "@/lib/api";

async function putItemCarrito(id, dataToSave) {
    try {
        const response = await api.put(`/store/carrito-detail/${id}`, dataToSave);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}