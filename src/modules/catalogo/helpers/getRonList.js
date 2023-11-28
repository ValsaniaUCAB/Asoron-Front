import ronCatalogo from "@/modules/catalogo/api/ronCatalogo";

async function getRonList() {
    const { data } = await ronCatalogo.get('/')
    // console.log(data.results)
    if (data) return data.results
    else return []
}


export default getRonList