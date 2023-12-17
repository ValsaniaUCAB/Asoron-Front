import api from '@/lib/api';

function listaImages(lista) {
    let listaA = []
    for (const e of lista) {
        let obj = {
            id: e.img_id,
            url: e.img_url,
        }
        listaA.push(obj)
    }
    return listaA
}

function listaRones(lista) {
    let listaA = []
    for (let e of lista) {
        e = e.fk_inve_event_inve_tiend
        let obj = {
            id: e.fk_inve_tiend_bote.bote_id,
            nombre: e.fk_inve_tiend_bote.bote_nombre,
            descripcion: e.fk_inve_tiend_bote.bote_descripcion,
            images: listaImages(e.fk_inve_tiend_bote.imagen),
            cantidad: e.inve_tiend_cantidad,
            precio: e.precio.hist_ron_precio,

        }
        listaA.push(obj)
    }
    return listaA
}

function arreglar(data) {
    console.log('Entra a arreglar')
    let obj = {
        id: data.event_id,
        nombre: data.event_nombre,
        descripcion: data.event_descripcion,
        images: listaImages(data.images),
        direccion: data.event_direccion,
        fechaInicio: data.event_fecha_ini,
        fechaFin: data.event_fecha_fin,
        lugar: {
            estado: data.fk_event_lugar.estado,
            municipio: data.fk_event_lugar.municipio,
            parroquia: data.fk_event_lugar.parroquia,
        },
        rones: listaRones(data.iventario),
    }
    return obj
}

async function getEventDetail(id) {
    const { data } = await api.get(`/store/evento-detail/${id}`);
    console.log('data sin modificar', data)
    console.log('data arreglada', arreglar(data))
}

export default getEventDetail;