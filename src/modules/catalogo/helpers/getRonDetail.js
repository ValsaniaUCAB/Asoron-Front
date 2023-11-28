import ronDetail from "@/modules/catalogo/api/ronDetail";

async function getRonDetail(id) {
    const { data } = await ronDetail.get(`/${id}`)
    // console.log(data.results)
    return data
}


export default getRonDetail