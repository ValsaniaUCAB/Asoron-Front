

export default {
    name: 'catalogoLayout',
    component: () => import(/* webpackChunvkName: "daybook" */ '../layouts/CatalogoLayout'),
    children: [
        {
            path: '',
            name: 'catalogo',
            component: () => import(/* webpackChunvkName: "catalogo" */ '../pages/Catalogo'),
        },
        {
            path: ':idRon/:idTienda',
            name: 'ron-detail',
            component: () => import(/* webpackChunvkName: "daybook-no-entry" */ '../pages/RonDetail.vue'),
            props: (route) => {
                return {
                    idRon: route.params.idRon,
                    idTienda: route.params.idTienda
                }
            }

        }

    ]
}