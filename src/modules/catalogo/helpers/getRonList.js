import ronCatalogo from "@/modules/catalogo/api/ronCatalogo";

function arreglarLista(ronList) {
    let ronListArreglado = []
    for (const item of ronList) {
        let obj = {
            //Elementos del ron
            id: item.fk_inve_tiend_bote.bote_id,
            nombre: item.fk_inve_tiend_bote.bote_nombre,
            descripcion: item.fk_inve_tiend_bote.bote_descripcion,
            images: item.fk_inve_tiend_bote.imagen,
            precio: item.precio.hist_ron_precio,
            // Elementos de la tienda
            id_tienda: item.inve_tiend_id,
            tipo_tienda: item.fk_inve_tiend_tiend.fk_tiend_tipo_tiend.tipo_tiend_nombre,
            nombre_tienda: item.fk_inve_tiend_tiend.tiend_nombre,
            cantidad: item.inve_tiend_cantidad,
        }
        ronListArreglado.push(obj)
    }
    return ronListArreglado
}

async function getRonList(nombreTienda = 'Asoron') {
    const { data } = await ronCatalogo.get(`/?nombre_tienda=${nombreTienda}`)
    const { results } = data
    // console.log(arreglarLista(results))
    if (data) return arreglarLista(results)
    else return []
}

export default getRonList