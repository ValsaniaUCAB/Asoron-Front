import api from "@/lib/api";

function arreglar(lista) {
    let listaArreglada = []
    lista.forEach(e => {
        listaArreglada.push({
            id: e.vent_id,
            fecha: e.vent_fecha_venta,
            montoTotal: e.vent_monto_total,
            puntos: e.venta_puntos,
            direccion: e.venta_direccion,
        })
    });
    return listaArreglada

}

export default async function getVentas() {
    const { data } = await api.get("/store/venta/");
    return arreglar(data);
}