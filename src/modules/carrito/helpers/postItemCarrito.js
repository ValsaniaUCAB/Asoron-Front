import api from '@/lib/api'
function isAfiliado(e) {
    if (e) {
        return {
            nombre: e.afil_nombre,
            precio: e.afil_precio
        }
    } else return null
}

function isEvento(e) {
    if (e) {
        return {
            nombre: e.fk_entr_envt_evento,
            entradaNombre: e.entr_envt_nombre,
            precio: e.entr_envt_precio,
            cantidadMaxima: e.entr_evnt_cantidad
        }
    } else return null
}

function isBotella(e) {
    if (e) {
        return {
            id: e.fk_inve_tiend_bote.bote_id,
            nombre: e.fk_inve_tiend_bote.bote_nombre,
            images: e.fk_inve_tiend_bote.imagen,
            precio: e.precio.hist_ron_precio,
            cantidadMaxima: e.inve_tiend_cantidad,
            precioConDescuento: null
        }
    } else return null
}

function isOferta(e) {
    if (e) {
        return {
            nombre: e.fk_ofer_bote_ofer.ofer_nombre,
            descuento: e.ofer_bote_porcentaje
        }
    } else return null

}

function arreglarItem(e) {

    let obj = {
        id: e.carri_item_id,
        cantidad: e.carri_item_cantidad,
        afiliado: isAfiliado(e.fk_carri_item_afil),
        evento: isEvento(e.fk_carri_item_entr_evento),
        botella: isBotella(e.fk_carri_item_inve_tiend),
        oferta: isOferta(e.fk_carri_item_ofer_ron)
    }

    return obj
}


async function postItemCarrito(dataToSave) {
    try {
        const { data } = await api.post(`/store/carrito-detail/`, dataToSave)
        console.log('data dentro de postItemCarrito', data)
        return arreglarItem(data)
    } catch (error) {
        console.log(error)
        throw error
    }

}

export default postItemCarrito